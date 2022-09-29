import React from "react";

import logo from "../../assets/logo.png";

import "./header.css";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo" />
      <ul className="header-menu">
        <li>Home</li>
        <li>Program</li>
        <li>Why Us</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  );
}

export default Header;
