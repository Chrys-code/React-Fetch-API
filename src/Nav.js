import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  const navstyle = {
    color: "white",
  };

  return (
    <nav>
      <Link style={navstyle} to="/">
        <h1 className="logo display-4">Logo</h1>
      </Link>

      <ul className="nav-links">
        <Link className="font-weight-lighter" style={navstyle} to="/about">
          <li>About</li>
        </Link>
        <Link className="font-weight-lighter" style={navstyle} to="/items">
          <li>Costumes</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
