import React from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const { movies, tvSeries, query } = location.state || {}; // Extract data passed from previous state

  // If no results found
  if (!movies && !tvSeries) return <p>No results found for "{query}".</p>;

  const combinedResults = [...(movies || []), ...(tvSeries || [])];
  const genreMap = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };

  return (
    <div className="flex flex-col mt-20 p-6 bg-gray-900 text-white">
      <div className="w-full">
        <div className="flex items-center gap-4 mb-6">
          <div className="px-2 py-1 bg-sky-400 rounded-lg">
            <i className="fa fa-play text-white text-sm"></i>
          </div>
          <h2 id="searchheading" className="text-2xl font-bold">Results for : {query}</h2>
        </div>

        {/* Display search results */}
        {combinedResults.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {combinedResults.slice(0, 15).map((content) => {
              const imageUrl = content.poster_path
                ? `https://image.tmdb.org/t/p/w500/${content.poster_path}`
                : null; // Set to null instead of placeholder image if no poster image

              // Skip this content if no image is available
              if (!imageUrl) return null;

              const rating = content.vote_average
                ? content.vote_average.toFixed(1) // Rating rounded to one decimal place
                : "N/A";
              const releaseYear = content.release_date
                ? content.release_date.split("-")[0] // Extract year from release date
                : "N/A";

              const genres = content.genre_ids?.map((genreId) => genreMap[genreId]) || ["Genre not available"];

              return (
                <div key={content.id} className="relative group bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
                  {/* Movie Image */}
                  <img src={imageUrl} alt={content.title || content.name} className="w-full h-80 object-cover" />
                  
                  {/* Card Content */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 id="searchtitle" className="text-lg font-bold">{content.title || content.name}</h4>
                      <p className="text-sm text-gray-300">{releaseYear}</p>
                    </div>

                    {/* Rating */}
                    <div className="absolute top-4 left-4 bg-yellow-300 text-sm text-black p-1 rounded-md">
                      {rating}
                    </div>

                    {/* Genres below Title */}
                    <div className="mt-2 text-xs text-gray-300">
                      {genres.join(", ")}
                    </div>
                  </div>

                  {/* Play Icon on the Bottom Right */}
                  <div className="absolute bottom-2 right-2 bg-sky-400 rounded-full px-2 py-1 cursor-pointer">
                    <i className="fa fa-play text-white"></i>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {combinedResults.length === 0 && <p>No results found for "{query}".</p>}
      </div>
    </div>
  );
};

export default SearchResults;
