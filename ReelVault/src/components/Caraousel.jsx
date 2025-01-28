import { useState, useEffect } from "react";
import { fetchMoviesWithGenres } from "./fetchMovies";
import { useNavigate } from "react-router-dom";  // If you're using React Router for navigation

export default function Carousel() {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();  // React Router navigate hook

  useEffect(() => {
    async function loadMovies() {
      const trendingMovies = await fetchMoviesWithGenres();
      setMovies(trendingMovies);
    }
    loadMovies();
  }, []);

  const scroll = (direction) => {
    if (direction === "left") {
      setCurrentIndex((currentIndex - 1 + movies.length) % movies.length);
    } else {
      setCurrentIndex((currentIndex + 1) % movies.length);
    }
  };

  const handleWatchNow = (movie) => {
    // This function is called when the 'Watch Now' button is clicked.
    // Use React Router to navigate to MoviePlay and pass the movie details through the state.
    navigate("/movieplay", { state: { selectedMovie: movie } });
  };

  if (!movies.length) {
    return (
      <div className="flex items-center justify-center w-screen h-screen text-white text-lg">
        Loading movies...
      </div>
    );
  }

  const currentMovie = movies[currentIndex];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="relative w-full h-full">
        <img
          src={currentMovie.image}
          alt={currentMovie.title}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/30 to-black/100" />

        <div className="absolute bottom-30 left-10 text-white max-w-lg space-y-4">
          <h1 id="movietitle" className="text-4xl font-extrabold">
            {currentMovie.title}
          </h1>
          <p className="flex items-center text-md font-medium">
            <i className="fa fa-star text-yellow-400 mr-2" aria-hidden="true"></i>{" "}
            {currentMovie.imdbRating}
            <span className="ml-4">{currentMovie.genre}</span>
          </p>
          <p className="text-md text-gray-400">{currentMovie.description}</p>
        </div>

        <button
          onClick={() => handleWatchNow(currentMovie)} // Pass current movie data on click
          className="absolute bottom-10 left-10 px-6 py-3 bg-sky-400 hover:bg-sky-600 text-white font-bold rounded-full flex items-center gap-2 cursor-pointer"
        >
          <i className="fa fa-play"></i> Watch Now
        </button>
      </div>

      <div className="absolute bottom-10 right-10 flex gap-2">
        <button
          onClick={() => scroll("left")}
          className="bg-slate-900 cursor-pointer w-10 h-10 flex items-center justify-center rounded-md hover:bg-sky-400"
        >
          <i className="fa fa-caret-left text-white"></i>
        </button>

        <button
          onClick={() => scroll("right")}
          className="bg-slate-900 cursor-pointer w-10 h-10 flex items-center justify-center rounded-md hover:bg-sky-400"
        >
          <i className="fa fa-caret-right text-white"></i>
        </button>
      </div>
    </div>
  );
}
