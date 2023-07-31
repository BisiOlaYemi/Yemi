import React from 'react';

function NavRender({ selectedProgram, onProgramClick }) {
  return (
    <div className="flex flex-col items-end">
      <div className="flex w-full justify-end">
        <button className={`bg-black hover:bg-gray-400 text-white font-bold py-1 px-4 rounded mr-1 ${selectedProgram === 1 ? "bg-amber-400" : ""}`} onClick={() => onProgramClick(1)}>About</button>
        <button className={`bg-black hover:bg-gray-400 text-white font-bold py-1 px-4 rounded mr-1 ${selectedProgram === 2 ? "bg-amber-400" : ""}`} onClick={() => onProgramClick(2)}>Resume</button>
        <button className={`bg-black hover:bg-gray-400 text-white font-bold py-1 px-4 rounded mr-1 ${selectedProgram === 3 ? "bg-amber-400" : ""}`} onClick={() => onProgramClick(3)}>Projects</button>
        <button className={`bg-black hover:bg-gray-400 text-white font-bold py-1 px-4 rounded mr-1 ${selectedProgram === 4 ? "bg-amber-400" : ""}`} onClick={() => onProgramClick(4)}>Contact</button>
      </div>
    </div>
  );
}

export default NavRender;
