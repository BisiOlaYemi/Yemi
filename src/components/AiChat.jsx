import { useState } from 'react';
import { HiPaperAirplane, HiXMark } from 'react-icons/hi2';
import { IoChatbubbleEllipses } from "react-icons/io5";

export default function Component() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm Yemi's AI assistant. How can I help you today?", isAi: true }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [userName, setUserName] = useState(''); 
  const [awaitingName, setAwaitingName] = useState(false); 

  // Q&A
  const predefinedResponses = {
    "who is yemi": "Yemi is a full stack developer with 6 years of experience in both frontend and backend development.",
    "what is your experience": "Yemi has experience in various technologies including React, Node.js, Nest, FastApi, MongoDB, PostgreSQL, TypeScript, and more.",
    "what frontend frameworks do you use": "Yemi primarily uses React.js/Next.js and has experience with other frameworks like Svelite",
    "what backend technologies do you use": "Yemi has extensive experience with Node.js, Nest, and has worked with other backend technologies like Django and FastApi",
    "what databases are you familiar with": "Yemi is familiar with both SQL (e.g., MySQL, PostgreSQL) and NoSQL (e.g., MongoDB, Firebase) databases.",
    "what is your favorite project": "One of Yemi's favorite projects involved building a real-time chat application with React, Node.js, and Socket.IO.",
    "can you tell me about software development": "Software development involves designing, creating, deploying, and maintaining software using various technologies and methodologies.",
    "do you have experience with cloud services": "Yes, Yemi has experience working with AWS, Azure, and Google Cloud Platform for deploying and managing applications.",
    "do you do freelance work": "Yes, Yemi is open to freelance opportunities. You can contact him via email for more details.",
    "how can i contact yemi": "You can contact Yemi via email at ogunrinde_olayemi@yahoo.com",
    "tell me about yemi": "You can contact Yemi via email at ogunrinde_olayemi@yahoo.com",
    "what does yemi do?": "Yemi is a full stack developer with 6 years of experience in both frontend and backend development. He's loyal and calm but sometimes he doesn't take shit, working with him will be a great experience because he's very good at problem solving, teaching etc.",
    "can you code?": "Ah hell no, I am not like gpts, I'm only trained to respond to chats as much as I can, you'll need other ai to achieve your aims",
    "what's your own name?": "I'm Akede, a trained Artificial Intelligence by Yemi with sole responsibility to engage users who visit here while away...",
    "what is your approach to problem-solving": "Yemi approaches problem-solving by first understanding the problem, breaking it down into smaller components, and then systematically tackling each component using appropriate tools and techniques.",
    "do you have experience with DevOps": "Yes, Yemi has experience with CI/CD pipelines, Docker, Kubernetes, and other DevOps practices to streamline software development and deployment.",
    "what tools do you use for version control": "Yemi primarily uses Git for version control and is experienced with platforms like GitHub, GitLab, and Bitbucket.",
    "what is your experience with testing": "Yemi is experienced with both frontend (e.g., Jest, React Testing Library) and backend (e.g., Mocha) testing frameworks.",
    "what is your favorite programming language": "Yemi's favorite programming language is JavaScript/TypeScript due to its versatility and use in both frontend and backend development.",
    "do you offer mentoring or coaching": "Yes, Yemi offers mentoring sessions for developers looking to improve their skills in full stack development. Reach out via email for more information."
  };
  

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() === '') return;


    setMessages([...messages, { text: inputMessage, isAi: false }]);
    const userMessage = inputMessage.toLowerCase();
    setInputMessage('');

    // Handle conversation flow
    if (awaitingName) {
      setUserName(inputMessage);
      setAwaitingName(false);
      setMessages(prev => [...prev, { text: `Welcome, ${inputMessage}! How can I assist you today?`, isAi: true }]);
    } else if (userMessage.includes("hi") || userMessage.includes("hello") || userMessage.includes("hey")) {

      setMessages(prev => [...prev, { text: "Hello! May I know your name?", isAi: true }]);
      setAwaitingName(true);
    } else {
      
      const response = predefinedResponses[userMessage];

      setTimeout(() => {
        if (response) {
          setMessages(prev => [...prev, { text: response, isAi: true }]);
        } else {
          
          setMessages(prev => [...prev, { text: "I'm not sure about that. Please contact Yemi via email for more details.", isAi: true }]);
        }
      }, 1000);
    }
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
        <div className="bg-gray-700 rounded-lg shadow-xl w-80 max-h-[500px] flex flex-col">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-semibold text-white">Chat Assistant</h2>
            <button onClick={() => setIsOpen(false)} className="text-white font-semibold hover:text-gray-100">
              <HiXMark size={20} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`${
                  message.isAi ? 'bg-blue-50 text-blue-800 roboto-regular' : 'bg-gray-100 text-gray-800 roboto-regular'
                } p-2 rounded-lg max-w-[80%] ${message.isAi ? 'mr-auto' : 'ml-auto'}`}
              >
                {message.text}
              </div>
            ))}
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
