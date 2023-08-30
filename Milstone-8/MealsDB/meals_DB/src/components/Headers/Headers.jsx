import React from "react";
import logo from "../../assets/logo-small.png";

const Headers = () => {
  return (
    <header className="text-gray-600 body-font bg-teal-950 ">
      <div className="container mx-auto flex justify-between items-center flex-col md:flex-row p-5">
        <div>
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={logo} alt="" />
          </a>
        </div>
        <div>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-yellow-50" href="/home">
              Home
            </a>
            <a className="mr-5 hover:text-yellow-50" href="/summary">
              Order Summary
            </a>
            <a className="mr-5 hover:text-yellow-50" href="/Block">
              Block
            </a>
            <a className="mr-5 hover:text-yellow-50" href="/Login">
              Login
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Headers;
