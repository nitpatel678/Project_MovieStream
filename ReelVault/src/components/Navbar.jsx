import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 drop-shadow-[0_2px_2px_rgba(0,0,0,.5)] text-white">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left Section */}
        <div className="flex items-center space-x-3 ml-5">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none cursor-pointer"
          >
            <i className="fas fa-bars text-lg"></i>
          </button>
          <span
            id="sitelogo"
            className="flex gap-2 items-center ml-3 font-bold"
          >
            <span className="bg-sky-400 text-white font-bold px-2 py-1 rounded-sm">
              REEL
            </span>
            <span className="ml-1 font-bold text-xl">Vault</span>
          </span>
        </div>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div
            id="dropdown"
            className="mt-2 px-2 py-1 absolute top-14 left-4 bg-sky-400 rounded-lg shadow-lg"
          >
            <ul className="text-left">
              <li className="px-4 py-2 hover:bg-black hover:text-sky-400 rounded-md  cursor-pointer">
                Trending
              </li>
              <li className="px-4 py-2 hover:bg-black hover:text-sky-400 rounded-md  cursor-pointer">
                Movies
              </li>
              <li className="px-4 py-2 hover:bg-black hover:text-sky-400 rounded-md  cursor-pointer">
                Tv Series
              </li>
              <li className="px-4 py-2 hover:bg-black hover:text-sky-400 rounded-md cursor-pointer">
                Top IMDb
              </li>
              <li className="px-4 py-2 hover:bg-black hover:text-sky-400 rounded-md cursor-pointer">
                Genre
              </li>
            </ul>
          </div>
        )}

        {/* Center Section */}
        <div className="flex-1 mx-4 flex justify-center items-center">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border bg-black/50 border-gray-900  bg-opacity-20 text-white rounded-lg py-2 pl-4 pr-12 focus:outline-none backdrop-blur-lg"
            />

            <button className="absolute right-3 cursor-pointer top-1/2 transform -translate-y-1/2 text-slate-500">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="mr-5">
          <button className="text-white hover:text-sky-400 cursor-pointer">
            <i className="fas fa-user text-lg"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
