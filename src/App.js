import React from "react";
import "./App.css";
import Nav from "./Nav.js";
import About from "./About.js";
import Items from "./Items.js";
import ItemDetails from "./ItemDetails.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/Items" exact component={Items} />
        <Route path="/Items/:id" component={ItemDetails} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="container">
      <h1>Home</h1>
      <p>In this react project all the Fortnite costumes can be viewed</p>
      <p>Each costume provided it's name, description and it's item set name</p>
    </div>
  );
}

export default App;
