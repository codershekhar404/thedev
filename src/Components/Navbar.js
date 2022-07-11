import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="nav_container">
        <NavLink className="logo" to="/thedev/">
          The Dev
        </NavLink>
        <input type="checkbox" name="click" id="click" />
        <label htmlFor="click" className="menu_btn">
          <i className="fas fa-bars"></i>
        </label>
        <ul className="nav">
          <li>
            <NavLink className="nav-link" to="/thedev/" >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="thedev/service" >
              Service
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="thedev/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="thedev/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
