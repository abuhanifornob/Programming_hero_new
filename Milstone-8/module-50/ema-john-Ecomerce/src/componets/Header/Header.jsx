import React from "react";
import logo from "../../resorce/images/Logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header-container">
      <img className="logo-image" src={logo} alt="" />
      <div className="header-nav">
        <Link to="/order">Orders</Link>
        <Link to="/review">Order Review</Link>
        <Link to="/inventory">Manage Inventory</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Header;
