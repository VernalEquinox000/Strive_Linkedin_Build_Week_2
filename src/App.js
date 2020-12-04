import React from "react";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import NewsFeed from "./Components/NewsFeed";
import { BrowserRouter as Router, Route } from "react-router-dom";
//Style
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/Navbar.css";
import "./Style/ExperienceSection.css";
import "./Style/NewsFeed.css";
import "./Style/Sidebar.css";
import "./Style/App.css";

function App() {
  return (
    // <div className="App">
    //   <NavBar />
    //   {/* <Header /> */}
    //   <NewsFeed />
    //   <Footer />
    // </div>
    <div className="App">
      {/* <NavBar />
      <Header />
      <NewsFeed />
      <Footer /> /} */}
      <Router>
        <NavBar />
        <Route path="/" exact component={Header} />
        <Route path="/:_id" component={Header} />
        <Route path="/newsfeed" component={NewsFeed} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
