import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CategoryNewsCart from "./categoryNewsCart";

const CategoryNews = () => {
  const { id } = useParams();
  const newsCategory = useLoaderData();

  return (
    <div>
      {newsCategory.map((catNews) => (
        <CategoryNewsCart
          key={catNews._id}
          catNews={catNews}
        ></CategoryNewsCart>
      ))}
    </div>
  );
};

export default CategoryNews;
