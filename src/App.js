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
    // <NavBar />
    // <Header />
    // <NewsFeed />
    // <Footer /> 

    <div className="App">
      <Router>
        <NavBar />
        <Route path="/" exact component={Header} />
        <Route path="/header:_id" render = {(props) => <Header {...props} />} />
        <Route path="/newsfeed" component={NewsFeed} />
        <Route path="/newsfeed" render = {(props) => <NewsFeed {...props} />} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

/* <div className="App">
      <NavBar />
      <Route exact path="/">
        <Redirect to="profile/me" />
      </Route>

      <Route
        exact
        path="/profile/:user"
        render={(props) => <Profile {...props} />}
      />
      <Route exact path="/feeds" render={(props) => <Feeds {...props} />} />

      <Footerr />
    </div> */