import React from "react";

export default function MoviePlay() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Movie Poster as Background with Fading Effect */}
      <div
        className="relative h-150 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/15011614/pexels-photo-15011614/free-photo-of-a-woman-in-gray-sleeveless-and-denim-jeans-posing-at-the-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        {/* Centered Playback Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="rounded-full bg-sky-400 px-7 py-6 text-white hover:bg-sky-600 cursor-pointer">
            <i className="fas fa-play text-2xl"></i>
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="border-b border-zinc-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-4">
            <button className="text-zinc-400 hover:text-white cursor-pointer">
              <i className="fas fa-play mr-2"></i>
              Trailer
            </button>

            <button className="text-zinc-400 hover:text-white cursor-pointer">
              <i className="fas fa-flag mr-2"></i>
              Report
            </button>
          </div>

          <div className="mt-4 text-center text-sm text-zinc-400">
            If the current server doesn&apos;t work, please try other servers
            below.
          </div>

          <div className="mt-4 flex items-center justify-center gap-4">
            <button className="bg-sky-400 rounded-md cursor-pointer px-4 py-2 hover:bg-sky-600 text-white">
              Server 1<i className="fas fa-bars ml-2"></i>
            </button>
            <button className="px-4 py-2 border rounded-md cursor-pointer border-zinc-400 text-zinc-400 hover:text-white hover:border-white">
              Server 2<i className="fas fa-bars ml-2"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Movie Details */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-[2fr_1fr] gap-8">
          {/* Movie Info */}
          <div>
            <h1 className="text-4xl font-bold">Nosferatu</h1>
            <div className="mt-2 flex items-center gap-3">
              <span className="px-2 py-1 bg-sky-400 rounded text-sm">
                Movie
              </span>
              <span className="px-2 py-1 border border-zinc-400 rounded text-sm">
                R
              </span>
              <div className="flex items-center">
                <i className="fas fa-star text-yellow-400"></i>
                <span className="ml-1">6.4</span>
              </div>
              <span>2024</span>
              <span>Duration: 132 min</span>
            </div>

            <p className="mt-4 text-zinc-400">
              A gothic tale of obsession between a haunted young woman and the
              terrifying vampire infatuated with her, causing untold horror in
              its wake.
            </p>

            <div className="mt-6 space-y-2">
              <div className="grid grid-cols-[100px_1fr] gap-2">
                <span className="text-zinc-400">Country:</span>
                <span>USA</span>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-2">
                <span className="text-zinc-400">Genre:</span>
                <span>Fantasy, Horror</span>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-2">
                <span className="text-zinc-400">Director:</span>
                <span>Robert Eggers</span>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-2">
                <span className="text-zinc-400">Stars:</span>
                <span>Bill Skarsgård, Lily-Rose Depp, Nicholas Hoult</span>
              </div>
            </div>
          </div>

          {/* Movie Stack Section */}
          <div className="space-y-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(52)-B8wodryUyNkYAn9qy4QM6q8C0WRvqS.png"
              alt="Nosferatu Movie Poster"
              className="w-full rounded-lg"
            />
            <div className="bg-sky-400 px-4 py-2 hover:bg-sky-600 rounded text-white cursor-pointer flex items-center justify-center">
              <i className="fas fa-play text-lg"></i>
              <span className="ml-2">Movie Files</span>
            </div>
            <div className="relative bg-slate-600 rounded-lg overflow-hidden">
              <ul className="relative z-10 max-h-40 overflow-y-auto text-sm space-y-2 p-4">
                <li className="p-2 hover:bg-sky-400 cursor-pointer rounded-lg">
                  File 1
                </li>
                <li className="p-2 hover:bg-sky-400 cursor-pointer rounded-lg">
                  File 2
                </li>
                <li className="p-2 hover:bg-sky-400 cursor-pointer rounded-lg">
                  File 3
                </li>
                <li className="p-2 hover:bg-sky-400 cursor-pointer rounded-lg">
                  File 4
                </li>
                <li className="p-2 hover:bg-sky-400 cursor-pointer rounded-lg">
                  File 5
                </li>
              </ul>
              {/* Fade Effect */}
              <div className="absolute inset-x-0 bottom-0 h-90 bg-gradient-to-t from-slate-900 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
