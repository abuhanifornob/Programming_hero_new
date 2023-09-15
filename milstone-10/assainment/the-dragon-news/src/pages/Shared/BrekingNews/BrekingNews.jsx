import React from "react";
import Marquee from "react-fast-marquee";
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from "react-awesome-button";

const BrekingNews = () => {
  return (
    <div className="flex bg-gray-200 rounded-lg">
      <button className="bg-red-600 text-2xl"> Latest</button>

      <Marquee speed={70} className="text-red-500 font-extrabold text-3xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
        necessitatibus, expedita atque distinctio dolore, reiciendis dolores
        adipisci vel quos iste voluptatem beatae id aut soluta? Consequatur in
        aut cum quae.
      </Marquee>
    </div>
  );
};

export default BrekingNews;
