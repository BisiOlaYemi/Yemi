import React from "react";

const Homepage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
    <div className="w-full max-w-6xl p-4 border border-md rounded-lg bg-neutral-900 shadow-lg mt-4 mb-4">
    <div className="grid grid-cols-2">
      {/* First section (Privacy Policy) */}
      <div className="col-span-1">
        <div className="p-8 max-w-2xl">
          <div className="border-solid border rounded-lg mb-4 p-4">
            
          </div>
        </div>
      </div>
      {/* Second section (Information Collection) */}
      <div className="col-span-1">
        <div className="p-8 max-w-2xl">
          <div className="border-solid border mb-4 p-4">
            
          </div>
        </div>
      </div>
      </div>
      </div>
      {/* Media query for mobile responsiveness */}
      <style>
        {`
          @media (max-width: 767px) {
            .grid-cols-2 {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Homepage;
