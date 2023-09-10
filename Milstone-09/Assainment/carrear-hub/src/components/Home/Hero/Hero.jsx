import React from "react";
import images from "../../../assets/All Images/P3OLGJ1 copy 1.png";
const Hero = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left text-center mb-16 md:mb-0 mt-0 ">
            <h1 className="title-font sm:text-6xl text-3xl mb-4  font-extrabold text-gray-900">
              One Step
              <br className="hidden lg:inline-block" />
              <span className="mt-4"> Closer To Your</span>
              <br />
              <span className="text-emerald-300 ">Dream Job</span>
            </h1>
            <p className="mb-8 leading-relaxed">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-3 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Get Start
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img src={images} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
