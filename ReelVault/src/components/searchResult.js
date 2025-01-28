// fetchContent.js
export const fetchMovies = async (query) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=33d0207259c140cc9e21188e1a1a72c9&query=${query}`);
      const data = await response.json();
      return data.results; // Return movie results
    } catch (error) {
      console.error("Error fetching movies:", error);
      return [];
    }
  };
  
  export const fetchTVSeries = async (query) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=33d0207259c140cc9e21188e1a1a72c9&query=${query}`);
      const data = await response.json();
      return data.results; // Return TV series results
    } catch (error) {
      console.error("Error fetching TV series:", error);
      return [];
    }
  };
  