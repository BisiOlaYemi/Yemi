import { useEffect, useRef, useState } from 'react';
import { HiPaperAirplane, HiXMark } from 'react-icons/hi2';
import { IoChatbubbleEllipses } from 'react-icons/io5';

const openingMessage = {
  role: 'assistant',
  content:
    "Hi, I'm Yemi's AI assistant. Ask me about Yemi's engineering experience, projects, or technologies.",
};

const suggestedQuestions = [
  'What does Yemi build?',
  'Tell me about Yemi’s experience',
  'What technologies does Yemi use?',
];

async function readChatStream(response, onToken) {
  if (!response.body) {
    throw new Error('Your browser could not read the assistant response stream.');
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';
  let completed = false;

  const readEvent = (event) => {
    const data = event
      .split('\n')
      .filter((line) => line.startsWith('data:'))
      .map((line) => line.slice(5).trim())
      .join('\n');
    if (!data) return;

    const payload = JSON.parse(data);
    if (payload.error) throw new Error(payload.error);
    if (typeof payload.token === 'string') onToken(payload.token);
    if (payload.done) completed = true;
  };

  try {
    while (true) {
      const { done, value } = await reader.read();
      buffer += decoder.decode(value, { stream: !done });
      const events = buffer.split('\n\n');
      buffer = events.pop();
      events.forEach(readEvent);
      if (done) break;
    }
    if (buffer.trim()) readEvent(buffer);
  } finally {
    reader.releaseLock();
  }

  if (!completed) throw new Error('The assistant response stream ended unexpectedly. Please try again.');
}

export default function AiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([openingMessage]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messageListRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const sendMessage = async (event, messageText = input, isRetry = false) => {
    event?.preventDefault();
    const content = messageText.trim();
    if (!content || isLoading) return;

    const history = messages.filter((message) => !message.error && !message.streaming);
    if (isRetry) {
      const lastUserIndex = history.map((message) => message.role).lastIndexOf('user');
      if (lastUserIndex >= 0) history.splice(lastUserIndex, 1);
    }
    const conversation = [...history, {
      role: 'user',
      content,
    }];
    setMessages([...conversation, { role: 'assistant', content: '', streaming: true }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: conversation.slice(-12).map(({ role, content: text }) => ({
          role,
          content: text,
        })) }),
      });
      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || 'The assistant could not answer right now.');
      }

      const contentType = response.headers.get('content-type') || '';
      if (!contentType.includes('text/event-stream')) {
        throw new Error('The chat service did not return a streaming response. Please try again.');
      }

      await readChatStream(response, (token) => {
        setMessages((current) => {
          const updated = [...current];
          const lastMessage = updated[updated.length - 1];
          if (lastMessage?.role === 'assistant' && lastMessage.streaming) {
            updated[updated.length - 1] = { ...lastMessage, content: lastMessage.content + token };
          }
          return updated;
        });
      });
      setMessages((current) => current.map((message, index) => (
        index === current.length - 1 && message.role === 'assistant'
          ? { ...message, streaming: false }
          : message
      )));
    } catch (error) {
      setMessages((current) => {
        const updated = [...current];
        const lastMessage = updated[updated.length - 1];
        const errorMessage = {
          role: 'assistant',
          content: error.message || 'Could not connect to the assistant. Please try again.',
          error: true,
        };
        if (lastMessage?.role === 'assistant' && lastMessage.streaming) {
          if (lastMessage.content) {
            updated[updated.length - 1] = { ...lastMessage, streaming: false };
            return [...updated, errorMessage];
          }
          updated[updated.length - 1] = errorMessage;
          return updated;
        }
        return [...updated, errorMessage];
      });
    } finally {
      setIsLoading(false);
    }
  };

  const retryLastMessage = () => {
    const lastUserMessage = [...messages].reverse().find((message) => message.role === 'user');
    if (lastUserMessage) sendMessage(null, lastUserMessage.content, true);
  };

  return (
    <div className="profile-chat">
      {!isOpen && (
        <button
          type="button"
          className="profile-chat__launcher"
          onClick={() => setIsOpen(true)}
          aria-label="Ask Yemi's AI assistant"
          aria-expanded={false}
        >
          <IoChatbubbleEllipses size={22} aria-hidden="true" />
          <span>Ask about Yemi</span>
        </button>
      )}

      {isOpen && (
        <section className="profile-chat__panel" aria-label="Chat with Yemi's AI assistant">
          <header className="profile-chat__header">
            <div className="profile-chat__identity">
              <span className="profile-chat__avatar" aria-hidden="true">Y</span>
              <div>
                <h2>Ask about Yemi</h2>
                <p>AI-powered profile assistant</p>
              </div>
            </div>
            <button
              type="button"
              className="profile-chat__close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <HiXMark size={20} aria-hidden="true" />
            </button>
          </header>

          <div className="profile-chat__messages" ref={messageListRef} aria-live="polite">
            {messages.map((message, index) => (
              <div
                className={`profile-chat__message profile-chat__message--${message.role}${message.error ? ' profile-chat__message--error' : ''}${message.streaming ? ' profile-chat__message--streaming' : ''}`}
                key={`${index}-${message.role}`}
              >
                {message.content}
                {message.error && (
                  <button type="button" className="profile-chat__retry" onClick={retryLastMessage}>
                    Try again
                  </button>
                )}
              </div>
            ))}

            {messages.length === 1 && (
              <div className="profile-chat__suggestions" aria-label="Suggested questions">
                {suggestedQuestions.map((question) => (
                  <button
                    type="button"
                    key={question}
                    onClick={() => sendMessage(null, question)}
                    disabled={isLoading}
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            {isLoading && messages[messages.length - 1]?.streaming && !messages[messages.length - 1]?.content && (
              <div className="profile-chat__typing" role="status">
                <span /><span /><span /><span className="sr-only">Yemi's assistant is thinking</span>
              </div>
            )}
          </div>

          <form className="profile-chat__form" onSubmit={sendMessage}>
            <label className="sr-only" htmlFor="profile-chat-input">Your message</label>
            <input
              id="profile-chat-input"
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about experience, projects..."
              maxLength={2000}
              disabled={isLoading}
            />
            <button type="submit" aria-label="Send message" disabled={!input.trim() || isLoading}>
              <HiPaperAirplane size={18} aria-hidden="true" />
            </button>
          </form>
          {/* <p className="profile-chat__privacy">Your message is sent to this site&apos;s Ollama server for a reply.</p> */}
        </section>
      )}
    </div>
  );
}
