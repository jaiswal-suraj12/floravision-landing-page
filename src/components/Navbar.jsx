
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 md:px-16 py-6 flex justify-between items-center bg-transparent">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <img src="/assets/plant.png" alt="logo" className="w-6 h-6" />
        <span className="text-xl font-semibold tracking-tight">FloraVision.</span>
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex items-center gap-12 text-sm text-gray-400 font-medium">
        <li className="text-white cursor-pointer">Home</li>
        <li className="hover:text-white cursor-pointer transition">Plants Type</li>
        <li className="hover:text-white cursor-pointer transition">More</li>
        <li className="hover:text-white cursor-pointer transition">Contact</li>
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-6">
        <button className="text-gray-400 hover:text-white">🔍</button>
        <button className="text-gray-400 hover:text-white relative">
                  <img src="/assets/bag.png" alt="logo" className="w-6 h-6" />

          <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></span>
        </button>
        <button className="md:hidden text-white">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;