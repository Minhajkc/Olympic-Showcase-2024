import React, { useState } from 'react';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#000000] via-[#0591bf] to-[#000000]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex space-x-7">
            <div>
              <a href="#" className="flex items-center">
                <span className="font-semibold rounded bg-white py-2 px-4 text-lg">Paris 2024</span>
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <button className="py-2 px-4 bg-white rounded  font-semibold hover:text-blue-500 transition duration-300 focus:outline-none">Home</button>
            <button className="py-2 px-4  bg-white rounded font-semibold hover:text-blue-500 transition duration-300 focus:outline-none">Athletes</button>
            <button className="py-2 px-4  bg-white rounded font-semibold hover:text-blue-500 transition duration-300 focus:outline-none">Events</button>
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={() => setShowMenu(!showMenu)}>
              <svg 
                className="w-6 h-6  text-white hover:text-blue-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        {showMenu && (
          <div className="md:hidden flex flex-col items-center mt-4">
            <button className="py-2 px-4  text-white-500 font-semibold hover:text-blue-500 transition duration-300 focus:outline-none">Home</button>
            <button className="py-2 px-4  text-white-500 font-semibold hover:text-blue-500 transition duration-300 focus:outline-none">Athletes</button>
            <button className="py-2 px-4  text-white-500 font-semibold hover:text-blue-500 transition duration-300 focus:outline-none">Events</button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
