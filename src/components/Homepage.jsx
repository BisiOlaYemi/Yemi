import React, { useState } from "react";
import SideDetail from './SideDetail'
import NavRender from "./NavRender";

const Homepage = () => {
  const [selectedProgram, setSelectedProgram] = useState(1);

  const programContents = [
    { id: 1, content: <div className="text-white">This is the About Me section content</div> },
    { id: 2, content: <div className="text-white">This is the Resume section content</div> },
    { id: 3, content: <div className="text-white">This is the Projects section content</div> },
    { id: 4, content: <div className="text-white">This is the Contact section content</div> },
  ];

  const handleProgramClick = (programId) => {
    setSelectedProgram(programId);
  };
  return (
    <div className="flex items-center justify-center bg-black">
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
            <div className="">
              {programContents.map((program) => {
                if (program.id === selectedProgram) {
                  return (
                    <div key={program.id} className="mt-4">
                      {program.content}
                    </div>
                  );
                } else {
                  return null;
                }
              })}
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
