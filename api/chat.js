const { OllamaError, streamReply, validateMessages } = require('../lib/ollama');

module.exports = async function chat(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    response.status(405).json({ error: 'Method not allowed.' });
    return;
  }

  const messages = validateMessages(request.body);
  if (!messages) {
    response.status(400).json({ error: 'Please send a valid message to the assistant.' });
    return;
  }

  try {
    let streaming = false;
    const writeEvent = (event) => {
      if (!streaming) {
        response.setHeader('Content-Type', 'text/event-stream; charset=utf-8');
        response.setHeader('Cache-Control', 'no-cache, no-transform');
        response.setHeader('X-Accel-Buffering', 'no');
        streaming = true;
      }
      response.write(`data: ${JSON.stringify(event)}\n\n`);
    };

    await streamReply(messages, {
      ollamaUrl: process.env.OLLAMA_URL || 'https://ollama.com',
      model: process.env.OLLAMA_MODEL || 'gemma4:31b',
      apiKey: process.env.OLLAMA_API_KEY,
    }, (token) => writeEvent({ token }));

    if (streaming) {
      writeEvent({ done: true });
      response.end();
    } else {
      response.status(502).json({ error: 'Ollama returned an empty reply. Please try again.' });
    }
  } catch (error) {
    if (response.headersSent) {
      response.write(`data: ${JSON.stringify({ error: error.message || 'The chat stream was interrupted.' })}\n\n`);
      response.end();
      return;
    }
    const statusCode = error instanceof OllamaError ? error.statusCode : 500;
    if (!(error instanceof OllamaError)) {
      console.error('Vercel chat function failed:', error);
    }
    response.status(statusCode).json({
      error: error instanceof OllamaError ? error.message : 'The chat service could not complete the request.',
    });
  }
};

module.exports.config = { maxDuration: 60 };
