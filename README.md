# Yemi Ogunrinde — portfolio

React portfolio with an AI assistant that answers questions about Yemi's engineering experience, projects, and technologies.

The assistant streams generated text into the chat as Ollama produces it, rather than waiting for the full answer.

## Deploy on Vercel with Ollama Cloud

The `/api/chat` Vercel Function calls Ollama Cloud directly. Production does **not** need a locally running Ollama server. Create an Ollama API key in [Ollama API key settings](https://ollama.com/settings/keys), then add these variables in **Vercel → Project → Settings → Environment Variables**:

| Variable | Value |
| --- | --- |
| `OLLAMA_URL` | `https://ollama.com` |
| `OLLAMA_MODEL` | `gemma4:31b` (or a cloud model enabled for your Ollama account) |
| `OLLAMA_API_KEY` | Your Ollama API key |

Add the variables to the environments you deploy (Production and, if desired, Preview), then redeploy so the function receives them. Keep `OLLAMA_API_KEY` server-side: do not add it as a `REACT_APP_` variable, put it in browser code, or commit it. Vercel loads the `api/chat.js` function and serves the React build; `vercel.json` sends client-side routes to the app.

Ollama's local models run for free on your own hardware. Ollama Cloud does not require a local installation, but its free plan has limited monthly usage credits for a subset of models and allows one concurrent request; it is not unlimited hosting. Check your [Ollama usage and model access](https://ollama.com/settings/usage) if a request is rejected or rate-limited.

## Run locally

Install [Ollama](https://ollama.com/download) and download a local model:

```sh
ollama pull llama3.2
```

Copy `.env.example` to `.env` and replace the cloud settings with the local Ollama settings:

```dotenv
OLLAMA_URL=http://127.0.0.1:11434
OLLAMA_MODEL=llama3.2
OLLAMA_API_KEY=
```

`OLLAMA_API_KEY` is not needed for the local Ollama API. Alternatively, keep the cloud URL and add your API key to use Ollama Cloud while developing.

Run the API and frontend in separate terminals:

```sh
npm run server
npm start
```

Open [http://localhost:3000](http://localhost:3000). The React development server proxies chat requests to the API on port 3001. If `npm run server` says that port 3001 is already in use, the API may already be running; check it with `curl http://localhost:3001/api/health` instead of starting another copy. The optional `.env` file is loaded by the local API server and is ignored by Git.

## Other scripts

- `npm run build` — build the React frontend.
- `npm test` — run the React test suite.
