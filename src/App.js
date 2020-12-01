import React from "react";
//Components
import Header from "./Components/Header";

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
//Style
import "./navbar.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
   
      <Footer />
    </div>
  );
}

export default App;
