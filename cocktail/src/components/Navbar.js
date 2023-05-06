import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <ul className="nav-links">
          <li>
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <li>
            <NavLink to="/" className="nav-link">About</NavLink>
          </li>
          <li>
            <NavLink to="/" className="nav-link">Reviews</NavLink>
          </li>
          <li>
            <NavLink to="/" className="nav-link">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
