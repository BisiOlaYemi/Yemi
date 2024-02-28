/* eslint-disable */
import React, { useState } from 'react';
import SideDetail from './SideDetail';
import NavRender from './NavRender';
import { Link } from 'react-router-dom';
import Projects from './Files/Projects';
import Contact from './Files/Contact';

const ProjectList = () => {
  const [selectedProgram, setSelectedProgram] = useState(3);

  const handleProgramClick = (programId) => {
    setSelectedProgram(programId);
  };

  return (
    <div className="flex items-center justify-center bg-gray-950">
      <div className="w-full max-w-8xl p-4 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-1 p-8 md:w-[90%]">
            <SideDetail />
          </div>
          <div className="md:col-span-4 p-8 border-solid border rounded-lg">
            <NavRender selectedProgram={selectedProgram} onProgramClick={handleProgramClick} />
            <Link to="/" className="text-white">
            <button className="bg-gray-900 text-white md:px-7 px-0 py-1 text-lg rounded-lg hover:bg-blue-400 hover:scale-105 transition-all duration-300 font-semibold">Back</button>
            </Link>
            <div className="">
              {/* {selectedProgram === 2 && <Resume />} */}
              {selectedProgram === 3 && <Projects />}
              {selectedProgram === 4 && <Contact />}
            </div>
          </div>
        </div>
      </div>
      
      <style>
      {`
          @media (max-width: 767px) {
            .md:grid-cols-5 {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ProjectList;
