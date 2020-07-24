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
      <h2 className="display-3">Home</h2>
      <p>This is a costume viewer application for Fortnite</p>
      <p>*A newsfeed could be created here*</p>
    </div>
  );
}

export default App;
