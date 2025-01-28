// MoviePlay.js
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMovieData } from './movieplay'; // Import the function

export default function MoviePlay() {
  const location = useLocation();
  const movieTitle = location.state?.selectedMovie?.title; // Get the movie title passed from previous route

  const [movie, setMovie] = useState(null); // Store movie data in the state
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    if (movieTitle) {
      // Fetch movie data using the title
      fetchMovieData(movieTitle)
        .then((data) => {
          if (data) {
            setMovie(data);
            setLoading(false);
          } else {
            setError('Movie not found');
            setLoading(false);
          }
        })
        .catch(() => {
          setError('An error occurred while fetching movie data');
          setLoading(false);
        });
    }
  }, [movieTitle]); // Re-run when the movieTitle changes

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen text-white text-lg">
        Loading movie data...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center w-full h-screen text-white text-lg">
        {error}
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="flex items-center justify-center w-full h-screen text-white text-lg">
        Movie details not found...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Movie Poster as Background with Fading Effect */}
      <div
        className="relative h-150 bg-cover bg-center"
        style={{
          backgroundImage: `url(${movie.poster || 'default-poster.jpg'})`, // Fallback image if no poster
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
            <h1 className="text-4xl font-bold">{movie.title}</h1>
            <div className="mt-2 flex items-center gap-3">
              <span className="px-2 py-1 bg-sky-400 rounded text-sm">Movie</span>
              <div className="flex items-center">
                <i className="fas fa-star text-yellow-400"></i>
                <span className="ml-1">{movie.rating}</span>
              </div>
              <span>{movie.releaseYear}</span>
            </div>

            <p className="mt-4 text-zinc-400">{movie.description}</p>

            <div className="mt-6 space-y-2">
              <div className="grid grid-cols-[100px_1fr] gap-2">
                <span className="text-zinc-400">Genre:</span>
                <span>{movie.genre}</span>
              </div>
            </div>
          </div>

          {/* Movie Stack Section */}
          <div className="space-y-4">
            <img
              src={movie.poster || 'default-poster.jpg'} // Dynamically load the movie poster
              alt={`${movie.title} Movie Poster`}
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <div className="bg-sky-400 px-4 py-2 hover:bg-sky-600 rounded text-white cursor-pointer flex items-center justify-center">
              <i className="fas fa-play text-lg"></i>
              <span className="ml-2">Movie Files</span>
            </div>
            <div className="relative bg-slate-600 rounded-lg overflow-hidden">
              <ul className="relative z-10 max-h-40 overflow-y-auto text-sm space-y-2 p-4">
                {movie.files?.map((file, index) => (
                  <li key={index} className="p-2 hover:bg-sky-400 cursor-pointer rounded-lg">
                    {file}
                  </li>
                ))}
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
