import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 text-white">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left Section */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <i className="fas fa-bars text-lg"></i>
          </button>
          <span className="flex items-center font-semibold">
            <span className="bg-red-600 text-white font-bold px-2 py-1 rounded-sm">
              REEL
            </span>
            <span className="ml-1 font-bold text-xl">Vault</span>
          </span>
        </div>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-14 left-4 bg-black border border-red-500 rounded-lg shadow-lg">
            <ul className="text-left">
              <li className="px-4 py-2 hover:bg-red-500 cursor-pointer">
                Trending
              </li>
              <li className="px-4 py-2 hover:bg-red-500 cursor-pointer">
                Top IMDb
              </li>
              <li className="px-4 py-2 hover:bg-red-500 cursor-pointer">Genre</li>
            </ul>
          </div>
        )}

        {/* Center Section */}
        <div className="flex-1 mx-4 flex justify-center items-center">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Search movies..."
              className="w-full bg-black bg-opacity-70 border border-red-500 placeholder-gray-400 text-white rounded-lg py-2 pl-4 pr-12 focus:outline-none"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <button className="text-white">
            <i className="fas fa-user text-lg"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
