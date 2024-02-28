import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const currentYear = new Date().getFullYear(); 
const Footer = () => {
  return (
    <footer className="relative bg-black text-white mt-24">
      <div className="absolute inset-0 opacity-80"></div>
      <div className="relative container mx-auto py-10 mb-8">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/ProjectList" className="hover:text-gray-400">
            Projects
          </Link>
          
        </div>
        <hr className="border-t border-gray-400 my-4" />
        <div className="flex justify-center items-center space-x-4 mt-6">
          <Link to="https://github.com/BisiOlaYemi" className="text-white hover:text-gray-400">
            <FaGithub size={24} />
          </Link>
          <Link to="https://twitter.com/yemioogunrinde/" className="text-white hover:text-gray-400">
            <FaTwitter size={24} />
          </Link>
          <Link to="https://www.linkedin.com/in/yemiogunrinde/" className="text-white hover:text-gray-400">
            <FaLinkedin size={24} />
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-gray-400">
         &copy; {currentYear} Bisi Ola Yemi | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
