import React from "react";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./Components/NavBar";
import ExperienceSection from "./Components/ExperienceSection";
import Footer from "./Components/Footer";
import "./Style/Navbar.css";
import "./Style/ExperienceSection.css";
import "./Style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <ExperienceSection />
      <Footer />
    </div>
  );
}

export default App;
