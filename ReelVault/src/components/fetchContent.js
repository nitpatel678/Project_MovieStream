const API_KEY = "33d0207259c140cc9e21188e1a1a72c9";
const BASE_URL = "https://api.themoviedb.org/3";

// Create a cache for genres
let genreCache = {};

async function fetchGenres() {
  if (Object.keys(genreCache).length) return genreCache;

  try {
    const response = await fetch(
      `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch genres");
    }
    const data = await response.json();
    // Store genres in cache
    genreCache = data.genres.reduce((acc, genre) => {
      acc[genre.id] = genre.name;
      return acc;
    }, {});
    
    return genreCache;
  } catch (error) {
    console.error("Error fetching genres:", error);
    return {};
  }
}

function buildImageUrl(path, size = "w500") {
  return `https://image.tmdb.org/t/p/${size}${path}`;
}

// Helper function to map genre IDs to genre names
function mapGenres(genreIds, genres) {
  return genreIds.map((id) => genres[id] || "Unknown").join(", ");
}

export async function fetchMovies() {
  try {
    const genres = await fetchGenres(); // Fetch genres
    const response = await fetch(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }
    const data = await response.json();

    return data.results.map((movie) => ({
      id: movie.id,
      title: movie.title,
      poster: buildImageUrl(movie.poster_path),
      rating: movie.vote_average.toFixed(1),
      releaseYear: movie.release_date ? movie.release_date.split("-")[0] : "N/A",
      genre: mapGenres(movie.genre_ids, genres),
      ageRating: "PG-13", // TMDB API does not directly provide age ratings
      duration: "2h 15m", // Placeholder; TMDB runtime data requires an additional fetch
      country: "USA", // Placeholder for demonstration
      description: movie.overview,
      type: "movie",
    }));
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}

export async function fetchTVSeries() {
  try {
    const genres = await fetchGenres(); // Fetch genres
    const response = await fetch(
      `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch TV series");
    }
    const data = await response.json();

    return data.results.map((series) => ({
      id: series.id,
      title: series.name,
      poster: buildImageUrl(series.poster_path),
      rating: series.vote_average.toFixed(1),
      releaseYear: series.first_air_date
        ? series.first_air_date.split("-")[0]
        : "N/A",
      genre: mapGenres(series.genre_ids, genres),
      ageRating: "TV-MA", // Placeholder
      seasons: series.number_of_seasons || "1",
      country: "N/A", // Placeholder; TMDB data would require additional fetching
      description: series.overview,
      type: "tvSeries",
    }));
  } catch (error) {
    console.error("Error fetching TV series:", error);
    return [];
  }
}

export async function fetchRecentlyUpdated() {
  try {
    const genres = await fetchGenres(); // Fetch genres
    const response = await fetch(
      `${BASE_URL}/trending/all/day?api_key=${API_KEY}&language=en-US`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch recently updated content");
    }
    const data = await response.json();

    return data.results.slice(0, 10).map((content) => ({
      id: content.id,
      title: content.media_type === "movie" ? content.title : content.name,
      poster: buildImageUrl(content.poster_path),
      releaseYear: content.release_date
        ? content.release_date.split("-")[0]
        : content.first_air_date
        ? content.first_air_date.split("-")[0]
        : "N/A",
      genre: mapGenres(content.genre_ids, genres), // Mapping genre IDs to names
    }));
  } catch (error) {
    console.error("Error fetching recently updated content:", error);
    return [];
  }
}
