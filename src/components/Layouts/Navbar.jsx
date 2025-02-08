import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  const projects = [
    {
      name: "AskyourPdf",
      url: "https://askyourpdf.com/"
    },
    {
      name: "Bountip ",
      url: "https://www.bountip.com/"
    },
    {
      name: "Lewk",
      url: "https://lewkclothing.ca/"
    },
    {
      name: "ReadyCars",
      url: "https://readycars.ng"
    },
    {
      name: "SeamLess HR",
      url: "https://seamlesshr.com/"
    },
    { 
      name: "FinPay Fintech", 
      url: "https://github.com/BisiOlaYemi/finpay" 
    },
    { 
      name: "Video to ppt/pdf",
      url: "https://github.com/BisiOlaYemi/convertvideo2pdfppt" 
    },
    { 
      name: "Web Scrapper",
      url: "https://github.com/BisiOlaYemi/webscap" 
    },
  ];

  const ProjectsDropdown = ({ isMobile = false }) => (
    <div className="relative">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className={`font-semibold ${
          isMobile ? 'text-xl' : 'dancing-script-fine text-2xl'
        } text-white hover:text-amber-500`}
      >
        Projects
      </button>
      {dropdownOpen && (
        <div 
          className={`absolute ${
            isMobile ? 'relative' : 'mt-2'
          } bg-black/95 rounded-md py-2 min-w-[160px]`}
        >
          {projects.map((project) => (
            <Link
              key={project.name}
              to={project.url}
              className="block px-4 py-2 bg-gray-900 text-white hover:text-amber-500 text-lg"
              onClick={() => {
                setDropdownOpen(false);
                if (isMobile) setNavOpen(false);
              }}
            >
              {project.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="relative z-50">
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center">
        <Link to="/" className="ml-4 lg:ml-28">
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
            <Link to="/Contact" className="hover:text-amber-500">
              Contact
            </Link>
          </li>
          <li>
            <ProjectsDropdown />
          </li>
        </ul>
      </div>
      {navOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
          <ul className="flex flex-col space-y-4">
            <li className="font-semibold text-xl text-white">
              <Link to="/Contact" className="hover:text-amber-500">
                Contact
              </Link>
            </li>
            <li>
              <ProjectsDropdown isMobile={true} />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;