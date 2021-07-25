import React from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png";
import Navigation from "../Navigation"

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <Navigation></Navigation>
    </header>
  );
}

export default Header;