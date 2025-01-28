import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Caraousel from "./components/Caraousel";
import Recommended from "./components/Recommended";
import SearchResults from "./components/SearchResults"; // Correctly imported
import MoviePlay from "./components/MoviePlay";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<><Caraousel /><Recommended /></>} />
          <Route path="/search-results" element={<SearchResults />} /> {/* Corrected path */}
          <Route path="/movieplay" element={<MoviePlay />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
