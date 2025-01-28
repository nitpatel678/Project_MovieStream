import { useState } from "react";
import NavBar from "./components/Navbar";
import { Caraousel } from "./components/Caraousel";
import Recommended from "./components/Recommended";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <NavBar />
      <Caraousel />
      <Recommended/>
      <Footer/>
    </>
  );
}

export default App;
