const { OllamaError, generateReply, validateMessages } = require('../lib/ollama');

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
    const reply = await generateReply(messages, {
      ollamaUrl: process.env.OLLAMA_URL || 'https://ollama.com',
      model: process.env.OLLAMA_MODEL || 'gemma4:31b',
      apiKey: process.env.OLLAMA_API_KEY,
    });
    response.setHeader('Cache-Control', 'no-store');
    response.status(200).json({ reply });
  } catch (error) {
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
