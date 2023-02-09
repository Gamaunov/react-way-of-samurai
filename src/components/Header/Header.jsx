import React from "react";
import logo from "../../img/logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" alt="logo" src={logo} />
    </header>
  );
};
export default Header;
