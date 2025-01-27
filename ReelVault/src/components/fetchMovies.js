// const TMDB_API_KEY = "33d0207259c140cc9e21188e1a1a72c9";

export async function fetchMoviesWithGenres() {
  try {
    // Fetch trending movies
    const moviesResponse = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}`
    );
    const moviesData = await moviesResponse.json();
    const movies = moviesData.results.slice(0, 10);

    // Fetch genre list
    const genresResponse = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB_API_KEY}`
    );
    const genresData = await genresResponse.json();
    const genreMap = genresData.genres.reduce((map, genre) => {
      map[genre.id] = genre.name;
      return map;
    }, {});

    // Map movies to include genres as a string
    return movies.map((movie) => ({
      id: movie.id,
      title: movie.title,
      image: `https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}`,
      imdbRating: movie.vote_average.toFixed(1),
      genre: movie.genre_ids.map((id) => genreMap[id]).join(", ") || "N/A",
      description: movie.overview,
    }));
  } catch (error) {
    console.error("Failed to fetch movies or genres:", error);
    return [];
  }
}
