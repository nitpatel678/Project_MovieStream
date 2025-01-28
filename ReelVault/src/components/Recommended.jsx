import { useState, useEffect } from "react";
import { fetchMovies, fetchTVSeries, fetchRecentlyUpdated } from "./fetchContent";

export default function Recommended() {
  const [recommendedContent, setRecommendedContent] = useState([]);
  const [recentlyUpdated, setRecentlyUpdated] = useState([]);
  const [activeType, setActiveType] = useState("movies");

  useEffect(() => {
    async function loadContent() {
      const movies = await fetchMovies();
      const series = await fetchTVSeries();
      setRecommendedContent(activeType === "movies" ? movies : series);
    }

    async function loadRecentlyUpdated() {
      const recentUpdates = await fetchRecentlyUpdated();
      setRecentlyUpdated(recentUpdates);
    }

    loadContent();
    loadRecentlyUpdated();
  }, [activeType]);

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen bg-gray-900 text-white p-6 gap-6">
      {/* Recommended Section */}
      <section className="w-full lg:w-full">
        <div className="flex items-center justify-between mb-6">
          {/* Play Icon and Heading */}
          <div className="flex items-center gap-4">
            <div className="p-2 bg-sky-400 rounded-lg">
              <i className="fa fa-play text-white text-md"></i>
            </div>
            <h2 id="recommendedtitle" className="text-2xl font-bold">Recommended</h2>
          </div>

          {/* Shuffle Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => setActiveType("movies")}
              className={`px-4 py-2 rounded-lg cursor-pointer ${
                activeType === "movies" ? "bg-sky-500" : "bg-gray-700"
              } hover:bg-sky-600`}
            >
              Movies
            </button>
            <button
              onClick={() => setActiveType("tvSeries")}
              className={`px-4 py-2 rounded-lg cursor-pointer ${
                activeType === "tvSeries" ? "bg-sky-500" : "bg-gray-700"
              } hover:bg-sky-600`}
            >
              TV Series
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {recommendedContent.slice(0, 15).map((content) => (
            <div
              key={content.id}
              className="relative group bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg"
            >
              {/* Image Poster */}
              <img
                src={content.poster}
                alt={content.title}
                className="object-cover w-full h-64"
              />

              {/* Play Icon on the Bottom Right */}
              <div className="absolute bottom-2 right-2 bg-sky-400 rounded-full px-2 py-1 cursor-pointer">
                <i className="fa fa-play text-white"></i>
              </div>

              {/* Rating */}
              <div className="absolute top-4 left-4 bg-yellow-300 text-sm text-black p-1 rounded-md">
                {content.rating}
              </div>

              {/* Bottom Info */}
              <div className="p-4">
                <h3 id="rcmovietitle" className="font-bold">{content.title}</h3>
                <p className="text-gray-400 text-sm">
                  <span className="block">{content.releaseYear}</span>
                  <span className="block">{content.genre.split(", ").slice(0, 2).join(", ")}</span>
                </p>
              </div>

              {/* Hover Popup - Displayed Beside the Card */}
              <div className="absolute inset-0 group-hover:opacity-100 opacity-0 transition-opacity duration-200 left-full top-0 ml-4 bg-black/90 w-80 p-4 rounded-lg">
                <div className="flex items-center">
                  <img src="https://img.icons8.com/ios/50/000000/rated-pg.png" alt="Rating" className="w-6 h-6" />
                  <span className="ml-2">{content.ageRating}</span>
                </div>
                <p>
                  <strong>{content.type === "movie" ? "Duration" : "Seasons"}:</strong>{" "}
                  {content.type === "movie" ? content.duration : content.seasons}
                </p>
                <div className="flex items-center">
                  <img
                    src="https://img.icons8.com/ios/50/000000/globe.png"
                    alt="Country"
                    className="w-6 h-6"
                  />
                  <span className="ml-2">{content.country}</span>
                </div>
                <p>
                  <strong>Description:</strong> {content.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recently Updated Section */}
      <section className="w-full lg:w-1/4 mt-6 lg:mt-0">
        <div className="flex items-center gap-4 mb-6">
          {/* Play Icon and Heading */}
          <div className="p-2 bg-sky-400 rounded-lg">
            <i className="fa fa-play text-white text-md"></i>
          </div>
          <h2 id="recommendedtitle" className="text-2xl font-bold">Recently Updated</h2>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2">
          {recentlyUpdated.slice(0, 10).map((content) => (
            <div
              key={content.id}
              className="flex gap-2 items-center bg-gray-800 rounded-lg shadow hover:shadow-md"
            >
              {/* Poster */}
              <img
                src={content.poster}
                alt={content.title}
                className="w-16 h-20 object-cover rounded"
              />

              {/* Info */}
              <div>
                <p className="text-gray-400 text-sm">
                  <span className="block">{content.genre}</span>
                  <span className="block">{content.releaseYear}</span>
                </p>
                <h3 id="rcmovietitle" className="font-bold mt-1">{content.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
