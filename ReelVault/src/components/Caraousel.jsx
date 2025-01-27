import { useState, useEffect } from "react";
import { fetchMoviesWithGenres } from "./fetchMovies";

export function Caraousel() {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  if (!movies.length) {
    return (
      <div className="flex items-center justify-center w-screen h-screen text-white text-lg">
        Loading movies...
      </div>
    );
  }

  const currentMovie = movies[currentIndex];

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="relative w-full h-full">
        <img
          src={currentMovie.image}
          alt={currentMovie.title}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/100" />

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

        <button className="absolute bottom-10 left-10 px-6 py-3 bg-sky-400 hover:bg-sky-600 text-white font-bold rounded-full flex items-center gap-2 cursor-pointer">
          <i className="fa fa-play"></i> Watch Now
        </button>
      </div>

      <button
        onClick={() => scroll("left")}
        className="absolute hover:bg-sky-400 cursor-pointer left-5 top-1/2 -translate-y-1/2 bg-black/30 p-3 rounded-full text-white"
      >
        &larr;
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute hover:bg-sky-400 cursor-pointer right-5 top-1/2 -translate-y-1/2 bg-black/30 p-3 rounded-full text-white"
      >
        &rarr;
      </button>
    </div>
  );
}
