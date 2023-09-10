import React from "react";
import logo from "../../assets/logo/carrearN.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="text-gray-600 body-font ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img className="w-20 h-20 rounded-full" src={logo} alt="" />
          <span className="text-xl">CareerHub</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-gray-900" to="/">
            Home
          </Link>
          <Link className="mr-5 hover:text-gray-900" to="/statistic">
            Statistic
          </Link>
          <Link className="mr-5 hover:text-gray-900" to="applied-job">
            Applied Job
          </Link>
          <Link className="mr-5 hover:text-gray-900" to="/blog">
            Blog
          </Link>
        </nav>
        <button className="inline-flex items-center bg-amber-600 border-0 py-3 px-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Start Applying
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
