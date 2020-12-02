import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./Components/NavBar";

import Footer from "./Components/Footer";
//Style


import "./Style/Navbar.css";
import "./Style/ExperienceSection.css";
import "./Style/App.css";

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Route path="/" exact component={Header} />

        <Footer />
        </Router>
    </div>
  );
}

export default App;
