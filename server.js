const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');

const envFile = path.join(__dirname, '.env');
if (fs.existsSync(envFile)) process.loadEnvFile(envFile);

const { streamReply, validateMessages } = require('./lib/ollama');

const port = Number(process.env.PORT || 3001);
const ollamaUrl = (process.env.OLLAMA_URL || 'http://127.0.0.1:11434').replace(/\/+$/, '');
const model = process.env.OLLAMA_MODEL || 'llama3.2';
const apiKey = process.env.OLLAMA_API_KEY;
const buildDirectory = path.join(__dirname, 'build');
const maxRequestBytes = 32 * 1024;

function sendJson(response, statusCode, data) {
  response.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
  });
  response.end(JSON.stringify(data));
}

async function readJson(request) {
  const chunks = [];
  let bytes = 0;

  for await (const chunk of request) {
    bytes += chunk.length;
    if (bytes > maxRequestBytes) {
      const error = new Error('Request is too large.');
      error.statusCode = 413;
      throw error;
    }
    chunks.push(chunk);
  }

  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } catch {
    const error = new Error('Request body must be valid JSON.');
    error.statusCode = 400;
    throw error;
  }
}

async function handleChat(request, response) {
  try {
    const body = await readJson(request);
    const messages = validateMessages(body);
    if (!messages) {
      sendJson(response, 400, { error: 'Please send a valid message to the assistant.' });
      return;
    }

    let streaming = false;
    const writeEvent = (event) => {
      if (!streaming) {
        response.writeHead(200, {
          'Content-Type': 'text/event-stream; charset=utf-8',
          'Cache-Control': 'no-cache, no-transform',
          'X-Accel-Buffering': 'no',
        });
        streaming = true;
      }
      response.write(`data: ${JSON.stringify(event)}\n\n`);
    };

    await streamReply(messages, { ollamaUrl, model, apiKey }, (token) => writeEvent({ token }));
    if (streaming) {
      writeEvent({ done: true });
      response.end();
    } else {
      sendJson(response, 502, { error: 'Ollama returned an empty reply. Please try again.' });
    }
  } catch (error) {
    if (response.headersSent) {
      response.write(`data: ${JSON.stringify({ error: error.message || 'The chat stream was interrupted.' })}\n\n`);
      response.end();
      return;
    }
    if (error.statusCode) {
      sendJson(response, error.statusCode, { error: error.message });
      return;
    }
    console.error('Chat request failed:', error);
    sendJson(response, 500, { error: 'The chat service could not complete the request.' });
  }
}

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
};

async function serveFrontend(request, response, pathname) {
  let requestedPath;
  try {
    requestedPath = decodeURIComponent(pathname);
  } catch {
    response.writeHead(400).end('Invalid URL.');
    return;
  }

  const relativePath = requestedPath === '/' ? 'index.html' : requestedPath.replace(/^\/+/, '');
  let filePath = path.resolve(buildDirectory, relativePath);
  if (!filePath.startsWith(`${buildDirectory}${path.sep}`) && filePath !== path.join(buildDirectory, 'index.html')) {
    response.writeHead(400).end('Invalid path.');
    return;
  }

  try {
    const file = await fs.promises.stat(filePath);
    if (!file.isFile()) throw new Error('Not a file');
  } catch {
    filePath = path.join(buildDirectory, 'index.html');
    try {
      await fs.promises.access(filePath);
    } catch {
      response.writeHead(404).end('Frontend build not found. Run npm run build first.');
      return;
    }
  }

  response.writeHead(200, {
    'Content-Type': contentTypes[path.extname(filePath)] || 'application/octet-stream',
    'X-Content-Type-Options': 'nosniff',
  });
  fs.createReadStream(filePath).pipe(response);
}

const server = http.createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host || 'localhost'}`);

  if (url.pathname === '/api/health' && request.method === 'GET') {
    sendJson(response, 200, { status: 'ok', provider: 'ollama', model });
    return;
  }
  if (url.pathname === '/api/chat' && request.method === 'POST') {
    await handleChat(request, response);
    return;
  }
  if (url.pathname.startsWith('/api/')) {
    sendJson(response, 404, { error: 'API endpoint not found.' });
    return;
  }
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { Allow: 'GET, HEAD' }).end('Method not allowed.');
    return;
  }
  await serveFrontend(request, response, url.pathname);
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. The API may already be running. Check it with: curl http://localhost:${port}/api/health`);
    process.exitCode = 1;
    return;
  }
  console.error('Could not start the portfolio server:', error);
  process.exitCode = 1;
});

server.listen(port, () => {
  console.log(`Portfolio server listening on http://localhost:${port} (Ollama model: ${model})`);
});
