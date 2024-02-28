import React from 'react';

function NavRender({ selectedProgram, onProgramClick }) {
  return (
    <div className="flex flex-col items-end">
      <div className="flex w-full justify-end">
        {/* <button className={`bg-gray-900 hover:bg-blue-400 text-white font-bold py-1 px-4 rounded mr-1 ${selectedProgram === 2 ? "bg-gray-700" : ""}`} onClick={() => onProgramClick(2)}>Resume</button> */}
        <button className={`bg-gray-900 hover:bg-blue-400 text-white font-bold py-1 px-4 rounded mr-1 ${selectedProgram === 3 ? "bg-gray-700" : ""}`} onClick={() => onProgramClick(3)}>Active</button>
        <button className={`bg-gray-900 hover:bg-blue-400 text-white font-bold py-1 px-4 rounded mr-1 ${selectedProgram === 4 ? "bg-gray-700" : ""}`} onClick={() => onProgramClick(4)}>Contact</button>
      </div>
    </div>
  );
}

export default NavRender;
