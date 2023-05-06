import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./logo-color.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <NavLink to="/">
          <div className="logo">
            <NavLink to="/">
              <img src={Logo} alt="Logo" className="logo-img" />
            </NavLink>
          </div>
        </NavLink>
        <ul className="nav-links">
          <li>
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <li>
            <NavLink to="/" className="nav-link">About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
