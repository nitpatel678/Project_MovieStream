import { useState } from "react";

const movies = [
  { id: 1, title: "Iron Man 3", image: "https://images.pexels.com/photos/1113972/pexels-photo-1113972.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
  { id: 2, title: "Aquaman", image: "https://images.pexels.com/photos/799132/pexels-photo-799132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
  { id: 3, title: "Avengers: Age of Ultron", image: "https://images.pexels.com/photos/355330/pexels-photo-355330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
  { id: 4, title: "Avengers: Infinity War", image: "https://images.pexels.com/photos/104827/cinema-hall-movie-theatre-theater-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
  { id: 5, title: "Avengers: Endgame", image: "https://images.pexels.com/photos/276204/pexels-photo-276204.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
  { id: 6, title: "Spider-Man: Homecoming", image: "https://images.pexels.com/photos/161852/cinema-sport-boxing-sporting-161852.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
  { id: 7, title: "Spider-Man: No Way Home", image: "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
  { id: 8, title: "X-Men: Apocalypse", image: "https://images.pexels.com/photos/426780/pexels-photo-426780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
];

export function Caraousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scroll = (direction) => {
    if (direction === "left") {
      setCurrentIndex(Math.max(currentIndex - 1, 0));
    } else {
      setCurrentIndex(Math.min(currentIndex + 1, movies.length - 4));
    }
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 25}%)` }}
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="flex-none w-1/4 aspect-[2/3] relative rounded-lg overflow-hidden"
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
        disabled={currentIndex === 0}
      >
        <span className="text-white">&larr;</span>
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
        disabled={currentIndex === movies.length - 4}
      >
        <span className="text-white">&rarr;</span>
      </button>
    </div>
  );
}
