import React from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="body-font bg-neutral-600 ">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center mb-4 md:mb-0">
          <img className="w-20 h-20 rounded-full" src={logo} alt="" />
          <span className="ml-3 text-xl font-extrabold hover:text-slate-950">
            Bangladesh
          </span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-red-200 font-extrabold justify-center">
          <a className="mr-5 cursor-pointer hover:text-orange-600">Home</a>
          <a className="mr-5 cursor-pointer hover:text-orange-600">
            Players History
          </a>
          <a className="mr-5 cursor-pointer hover:text-orange-600">
            Players Cost
          </a>
          <a className="mr-5 cursor-pointer hover:text-orange-600">Login</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
