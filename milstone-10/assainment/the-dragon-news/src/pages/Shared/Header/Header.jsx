import React from "react";

import logo from "../../../assets/logo.png";
import moment from "moment/moment";
import BrekingNews from "../BrekingNews/BrekingNews";
import NavigationBar from "../NavigationBar/NavigationBar";

const Header = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center flex-col ">
        <img src={logo} alt="" />
        <p className="text-xl font-bold text-zinc-400 font-mono mt-2">
          Journalism Without Fear or Favour
        </p>
        <p className="text-2xl my-2 font-bold text-stone-500">
          {moment().format("dddd,LL")}
        </p>
      </div>
      <div>
        <BrekingNews></BrekingNews>
      </div>
      <div>
        <NavigationBar></NavigationBar>
      </div>
    </div>
  );
};

export default Header;
