import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="">
        <Link to="/" className="ml-5">
          Home
        </Link>
        <Link to="/login" className="ml-5">
          Login
        </Link>
        <Link to="/signup" className="ml-5">
          Signup
        </Link>
        <Link to="/logout" className="ml-5">
          Log Out
        </Link>
      </nav>
    </div>
  );
};

export default Header;
