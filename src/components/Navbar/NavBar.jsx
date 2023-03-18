import React from "react";
import './NavBar.css'
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav__content">
        <li className="nav__content-item">
          <NavLink to="/dialogs">Messages</NavLink>
        </li>
        <li className="nav__content-item">
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li className="nav__content-item">
          <NavLink to="/users">Users</NavLink>
        </li>
        <li className="nav__content-item">
          <NavLink to="#q">Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
