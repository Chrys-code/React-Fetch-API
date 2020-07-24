import React from "react";
import "./App.css";

function About() {
  return (
    <div className="container">
      <h2 className="display-3">About</h2>
      <h5 className="font-weight-light">
        This is a project using Fortnite API to practice React
      </h5>
      <h5 className="font-weight-light">
        Key elements implemented in this project:
      </h5>
      <div className="keys">
        <ul>
          <li>Using API in React</li>
          <li>Create Search Facility</li>
          <li>React Router</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
