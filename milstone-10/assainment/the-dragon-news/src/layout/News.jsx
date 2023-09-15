import React from "react";
import NewsHeader from "../pages/Shared/Header/NewsHeader";
import { Outlet } from "react-router-dom";
import RightSide from "../RightSide/RightSide";

const News = () => {
  return (
    <div>
      <NewsHeader></NewsHeader>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-9 sm:col-span-9 md:col-span-9 lg:col-span-9 xl:col-span-9">
          <Outlet></Outlet>
        </div>

        <div className="col-span-3 sm:col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-3">
          <RightSide></RightSide>
        </div>
      </div>
    </div>
  );
};

export default News;
