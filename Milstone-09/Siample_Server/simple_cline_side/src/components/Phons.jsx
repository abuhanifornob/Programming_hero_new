import React from "react";
import { useLoaderData } from "react-router-dom";

const Phons = () => {
  const phones = useLoaderData();
  console.log(phones);
  return (
    <div>
      <h1>This is Phones Details{phones.length}</h1>
    </div>
  );
};

export default Phons;
