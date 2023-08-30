/* eslint-disable react/prop-types */
import React from "react";
import MealsCart from "../MealsCart/MealsCart";

const Products = ({ mealsProducts, addToCart }) => {
  return (
    <div className="mealsCartContainer grid grid-cols-2 md:grid-cols-3 gap-4 m-4 ">
      {mealsProducts.map((product) => (
        <MealsCart
          meals={product}
          key={product.idMeal}
          addToCart={addToCart}
        ></MealsCart>
      ))}
    </div>
  );
};

export default Products;
