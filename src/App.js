import React from "react";
<<<<<<< Updated upstream
import Header from "./Components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';


import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
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

=======
import 'bootstrap/dist/css/bootstrap.min.css';
import Aside from "./Components/Aside";

function App() {
  return <div className="App">
   <Aside />

  </div>;
>>>>>>> Stashed changes
}

export default App;
