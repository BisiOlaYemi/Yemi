import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen((prev) => {
      const next = !prev;
      if (!next) setDropdownOpen(false);
      return next;
    });
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

  const getScreenshotUrl = (url) => `https://s.wordpress.com/mshots/v1/${encodeURIComponent(
    url
  )}?w=400`;

  

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
          className={`absolute ${isMobile ? 'relative w-full' : 'right-0 left-auto mt-2 w-[560px] origin-top-right'} bg-black/95 rounded-md p-4 overflow-hidden`}
        >
          <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-4 ${isMobile ? 'max-h-[60vh] overflow-y-auto' : ''}`}> 
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setDropdownOpen(false);
                  if (isMobile) setNavOpen(false);
                }}
                className="w-full text-left block bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200"
              >
                <div className="w-full h-28 bg-gray-800">
                  <img
                    src={getScreenshotUrl(project.url)}
                    alt={project.name}
                    className="object-cover w-full h-full"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = 'https://via.placeholder.com/560x280?text=Preview';
                    }}
                  />
                </div>
                <div className="px-3 py-2 text-white font-semibold text-center">{project.name}</div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="relative z-50">
      <div className="absolute top-0 left-0 w-full p-4">
        <div className="w-full max-w-7xl mx-auto px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Yemi" className="w-24 h-auto" />
          </Link>

          <div className="flex items-center">
            <HiMenuAlt3
              onClick={handleNavToggle}
              className="z-20 text-white font-bold cursor-pointer lg:hidden"
              size={35}
            />

            <ul className="hidden lg:flex space-x-8 ml-6">
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
        </div>
      </div>

      {navOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 overflow-auto"
          onClick={() => { setNavOpen(false); setDropdownOpen(false); }}
        >
          <div className="min-h-screen max-w-3xl mx-auto p-6">
            <div className="flex justify-end mb-4">
              <button
                onClick={() => { setNavOpen(false); setDropdownOpen(false); }}
                className="text-white bg-gray-800/40 px-3 py-2 rounded-md"
                aria-label="Close menu"
              >
                Close
              </button>
            </div>

            <div onClick={(e) => e.stopPropagation()}>
              <ul className="flex flex-col space-y-4">
                <li className="font-semibold text-xl text-white">
                  <Link to="/Contact" onClick={() => { setNavOpen(false); setDropdownOpen(false); }} className="hover:text-amber-500">
                    Contact
                  </Link>
                </li>
                <li>
                  <ProjectsDropdown isMobile={true} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
