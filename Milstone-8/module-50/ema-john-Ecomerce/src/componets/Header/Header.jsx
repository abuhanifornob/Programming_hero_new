import React from "react";
import logo from "../../resorce/images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header-container">
      <img className="logo-image" src={logo} alt="" />
      <div className="header-nav">
        <a href="/order">Order</a>
        <a href="/review">Order Review</a>
        <a href="/inventory">Manage Inventory</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Header;
