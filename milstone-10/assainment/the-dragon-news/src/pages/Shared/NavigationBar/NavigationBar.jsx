import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const NavigationBar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-gray-900" to="/category/0">
              Home
            </Link>
            <Link className="mr-5 hover:text-gray-900">About</Link>
            <Link className="mr-5 hover:text-gray-900">Carrear</Link>
          </nav>

          <div className="flex justify-center items-center">
            <p>
              <FaUserCircle className="text-3xl mr-3" />
            </p>
            <button className="inline-flex items-center bg-amber-400 text-white border-0 py-1 px-4 focus:outline-none hover:bg-gray-200 hover:text-black rounded text-base mt-4 md:mt-0">
              <Link to="/login"> Login</Link>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavigationBar;
