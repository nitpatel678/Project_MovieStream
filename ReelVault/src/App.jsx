import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Caraousel from "./components/Caraousel";
import Recommended from "./components/Recommended";
import SearchResult from "./components/SearchResult";
import MoviePlay from "./components/MoviePlay";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="main-content">
        <Routes>
          {/* Define routes for your components */}
          <Route path="/" element={<><Caraousel /><Recommended /></>} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/movie/:id" element={<MoviePlay />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
