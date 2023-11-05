import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaXTwitter } from "react-icons/fa";
import { SiLinkedin, SiGithub } from "react-icons/si";
import yemi from '../assets/yemi.png'

const SideDetail = () => {
  return (
    <div className="border-solid border rounded-xl mb-4 p-4">
              <div className="flex flex-col items-center">
                <img
                  src={yemi}
                  alt='iconic'
                  className=" rounded-full h-20 w-20 mb-4" 
                />
                <h2 className="text-xl text-center text-white font-bold mb-8">Yemi Ogunrinde</h2>
                <p className="text-white text-center mb-6">Software Developer</p>
                <hr className="border-t-1 border-gray-400 w-4/5 mx-auto my-4 mb-6" />
                <div className="flex items-center mb-8">
                  <FaEnvelope className="mr-2 text-white " />
                  <a href='mailto:ogunrinde_olayemi@yahoo.com'><span className='text-white'>Send an email</span></a>
                </div>
                <div className="flex items-center mb-8">
                  <FaPhone className="mr-2 text-white" />
                  <a href='tel:+2349038944790'><span className='text-white'>09038944790</span></a>
                </div>
                <div className="flex items-center mb-12">
                  <FaMapMarkerAlt className="mr-2 text-white" />
                  <p className='text-white'>Lagos, Nigeria</p>
                </div>
                <ul className="flex space-x-4">
                  <li>
                    <a href="https://www.linkedin.com/in/yemiogunrinde/" target="_blank" rel="noopener noreferrer">
                      <SiLinkedin className="text-white hover:text-blue-500 transition duration-300" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/yemioogunrinde" target="_blank" rel="noopener noreferrer">
                      <FaXTwitter className="text-white hover:text-blue-400 transition duration-300" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/BisiOlaYemi" target="_blank" rel="noopener noreferrer">
                      <SiGithub className="text-white hover:text-gray-600 transition duration-300" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
  );
};

export default SideDetail;
