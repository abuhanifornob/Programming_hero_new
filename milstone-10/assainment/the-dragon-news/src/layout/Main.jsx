import React from "react";
import Header from "../pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import LeftSide from "../pages/LeftSide/LeftSide";
import RightSide from "../RightSide/RightSide";

const Main = () => {
  return (
    <div>
      <Header></Header>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3 sm:col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-3">
          <LeftSide></LeftSide>
        </div>

        <div className="col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-6">
          <Outlet></Outlet>
        </div>

        <div className="col-span-3 sm:col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-3">
          <RightSide></RightSide>
        </div>
      </div>
    </div>
  );
};

export default Main;
