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

    const history = messages.filter((message) => !message.error);
    if (isRetry) history.pop();
    const conversation = [...history, {
      role: 'user',
      content,
    }];
    setMessages(conversation);
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
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'The assistant could not answer right now.');
      }

      setMessages((current) => [...current, { role: 'assistant', content: result.reply }]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          role: 'assistant',
          content: error.message || 'Could not connect to the assistant. Please try again.',
          error: true,
        },
      ]);
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
                className={`profile-chat__message profile-chat__message--${message.role}${message.error ? ' profile-chat__message--error' : ''}`}
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

            {isLoading && (
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
