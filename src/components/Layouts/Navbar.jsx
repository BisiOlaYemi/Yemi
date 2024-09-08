import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="relative z-50">
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center">
        <Link to="/" className="ml-4 lg:ml-32">
          <img 
            src={logo} 
            alt="Yemi" 
            className="w-[100px] h-auto"
          />
        </Link>
        <HiMenuAlt3
          onClick={handleNavToggle}
          className="z-20 text-white font-bold cursor-pointer lg:hidden"
          size={35}
        />
        <ul className="hidden lg:flex space-x-8 mr-4 lg:mr-24">
          <li className="font-bold dancing-script-fine text-2xl text-white">
            <Link to="/" className="hover:text-amber-500">
              Home
            </Link>
          </li>
          <li className="font-semibold dancing-script-fine text-2xl text-white">
            <Link to="/#" className="hover:text-amber-500">
              Projects
            </Link>
          </li>
        </ul>
      </div>
      {navOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
          <ul className="flex flex-col space-y-4">
            <li className="font-semibold text-xl text-white">
              <Link to="/" className="hover:text-amber-500">
                Home
              </Link>
            </li>
            <li className="font-semibold text-xl text-white">
              <Link to="/#" className="hover:text-amber-500">
                Projects
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}