import React, { useState } from 'react';
import SideDetail from './SideDetail';
import NavRender from './NavRender';
// import AboutMe from './Files/AboutMe';
import Resume from './Files/Resume';
import Projects from './Files/Projects';
import Contact from './Files/Contact';

const Homepage = () => {
  const [selectedProgram, setSelectedProgram] = useState(1);

  const handleProgramClick = (programId) => {
    setSelectedProgram(programId);
  };

  return (
    <div className="flex items-center justify-center bg-gray-950">
      <div className="w-full max-w-8xl p-4 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* First section (Sidebar) */}
          <div className="md:col-span-1 p-8 md:w-[90%]">
            <SideDetail />
          </div>
          {/* Second section (Information Collection) */}
          <div className="md:col-span-4 p-8 border-solid border rounded-lg">
            {/* Navigation bar */}
            <NavRender selectedProgram={selectedProgram} onProgramClick={handleProgramClick} />

            {/* Render the content based on the selected program */}
            <div className="">
              {/* {selectedProgram === 1 && <AboutMe />} */}
              {selectedProgram === 2 && <Resume />}
              {selectedProgram === 3 && <Projects />}
              {selectedProgram === 4 && <Contact />}
            </div>
          </div>
        </div>
      </div>
      {/* Media query for mobile responsiveness */}
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

export default Homepage;
