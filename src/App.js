import React from "react";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import NewsFeed from "./Components/NewsFeed";
//Style
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/Navbar.css";
import "./Style/ExperienceSection.css";
import "./Style/App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Header /> */}
      <NewsFeed />
      <Footer />
    </div>
  );
}

export default App;
