import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const currentYear = new Date().getFullYear();
const Footer = () => {
  return (
    <footer className="bg-black text-white mt-8">
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link to="/" className="hover:text-gray-400">Home</Link>
            <Link to="/ProjectList" className="hover:text-gray-400">Projects</Link>
          </div>

          <div className="flex items-center space-x-4">
            <a href="https://github.com/BisiOlaYemi" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaGithub size={24} />
            </a>
            <a href="https://twitter.com/yemioogunrinde/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaXTwitter size={24} />
            </a>
            <a href="https://www.linkedin.com/in/yemiogunrinde/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        <hr className="border-t border-gray-400 my-4" />

        <div className="text-center text-gray-400 py-2">&copy; {currentYear} Bisi Ola Yemi | All rights reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
