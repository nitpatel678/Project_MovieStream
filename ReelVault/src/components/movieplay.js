// fetchMovieData.js

const API_KEY = '33d0207259c140cc9e21188e1a1a72c9';  // TMDb API Key (Replace with your actual key)

// Function to fetch movie details from TMDb API
export async function fetchMovieData(movieTitle) {
  try {
    // Use search query to fetch movie details by title
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(movieTitle)}&language=en-US`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch movie data');
    }

    const data = await response.json();

    if (data.results.length === 0) {
      throw new Error('Movie not found');
    }

    return data.results[0]; // Return the first movie from the results
  } catch (error) {
    console.error(error);
    return null; // Return null if an error occurs
  }
}
