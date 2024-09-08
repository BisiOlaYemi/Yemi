import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiPaperAirplane, HiXMark } from 'react-icons/hi2';
import { IoChatbubbleEllipses } from "react-icons/io5";
import predefinedResponses from './models/training';

const LoadingSpinner = () => (
  <motion.div
    className="flex justify-center items-center p-4"
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 1 }}
  >
    <div className="rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
  </motion.div>
);

export default function Component() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm Akede, Yemi's AI assistant. ask me only questions that I am trained on?", isAi: true }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [userName, setUserName] = useState(''); 
  const [awaitingName, setAwaitingName] = useState(false); 
  const [isLoading, setIsLoading] = useState(false);


  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() === '') return;

    setMessages([...messages, { text: inputMessage, isAi: false }]);
    const userMessage = inputMessage.toLowerCase();
    setInputMessage('');

    if (awaitingName) {
      setUserName(inputMessage);
      setAwaitingName(false);
      setMessages(prev => [...prev, { text: `Welcome, ${inputMessage}! How can I assist you today?`, isAi: true }]);
    } else if (userMessage.includes("hi") || userMessage.includes("hello") || userMessage.includes("hey")) {
      setMessages(prev => [...prev, { text: "Hello! May I know your name?", isAi: true }]);
      setAwaitingName(true);
    } else {
      setIsLoading(true);  

      const response = predefinedResponses[userMessage];
      
      // Simulate typing effect
      setTimeout(() => {
        setIsLoading(false);  
        if (response) {
          typeOutResponse(response);
        } else {
          typeOutResponse(".I'm not sure I was trained to respond to this prompt or you miss the right prompt? make sure there is no single quote in your prompt and consider including question (?) mark at the end of your question. Please contact Yemi via email for more details.");
        }
      }, 1000); 
    }
  };

  const typeOutResponse = (response) => {
    let index = 0;
    const typingSpeed = 50; 

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: '', isAi: true } 
    ]);

    const intervalId = setInterval(() => {
      setMessages(prevMessages => {
        const updatedMessages = [...prevMessages];
        const lastMessageIndex = updatedMessages.length - 1;

        if (index < response.length) {
          updatedMessages[lastMessageIndex].text += response[index]; 
        }

        return updatedMessages;
      });

      index++;

      if (index >= response.length) {
        clearInterval(intervalId);
      }
    }, typingSpeed);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-br from-purple-500 to-amber-500 text-white rounded-full p-4 shadow-lg hover:bg-gray-700 transition-colors"
        >
          <IoChatbubbleEllipses size={24} />
        </button>
      )}

      {isOpen && (
        <div className="bg-teal-50 rounded-lg shadow-xl w-80 max-h-[500px] flex flex-col">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-semibold text-gray-700">Chat Assistant</h2>
            <button onClick={() => setIsOpen(false)} className="text-gray-800 font-semibold hover:text-gray-800">
              <HiXMark size={20} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`${
                  message.isAi ? 'bg-gray-800 text-base text-white roboto-regular font-semibold' : 'bg-purple-950 text-white text-base font-semibold roboto-regular'
                } p-2 rounded-lg max-w-[80%] ${message.isAi ? 'mr-auto' : 'ml-auto'}`}
              >
                {message.text}
              </div>
            ))}
            {isLoading && <LoadingSpinner />}
          </div>
          <form onSubmit={handleSendMessage} className="border-t p-4 flex">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button
              type="submit"
              className="bg-gradient-to-br from-purple-500 to-amber-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
            >
              <HiPaperAirplane size={20} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}