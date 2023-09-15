import React from "react";
import q1 from "../assets/qZone1.png";
import q2 from "../assets/qZone2.png";
import q3 from "../assets/qZone3.png";
import bg1 from "../assets/bg1.png";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const RightSide = () => {
  return (
    <div>
      <div>
        <p className="text-2xl font-extrabold mb-4">Login With</p>
        <button className=" btn btn-outline w-full flex justify-center items-center mb-3">
          <FaGoogle className="mr-2" />
          <span>Login With Google</span>
        </button>
        <button
          className="btn btn-outline 
        w-full flex justify-center items-center mb-3"
        >
          <FaGithub className="mr-2"></FaGithub>
          <span>Login With GitHub</span>
        </button>
      </div>
      <div>
        <p>Find Us On</p>
        <button className="w-full border-spacing-1 flex items-center mb-1">
          <FaFacebook className="rounded-full mr-5"></FaFacebook>
          <span>Facebook</span>
        </button>
        <button className="w-full border-spacing-1 flex items-center mb-1">
          <FaTwitter className="rounded-full mr-5" />
          <span>Twiter</span>
        </button>
        <button className="w-full border-spacing-1 flex items-center mb-1">
          <FaInstagram className="rounded-full mr-5"></FaInstagram>
          <span>Instagram</span>
        </button>
      </div>
      <div>
        <p>Q-Zone</p>
        <div>
          <img src={q1} alt="" />
          <img src={q2} alt="" />
          <img src={q3} alt="" />
        </div>
      </div>

      <div className="relative">
        <img src={bg1} alt="" className="opacity-85" />

        <div className="absolute top-20 right-0 left-0">
          <h2 className="text-4xl text-white  text-center font-extrabold">
            Create an Amazing Newspaper
          </h2>
          <p className="text-xl text-white text-center font-bold p-10">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <div className="flex justify-center items-center">
            <button className="bg-red-600 focus:shadow-lg">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
