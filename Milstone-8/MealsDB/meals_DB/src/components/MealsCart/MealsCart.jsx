/* eslint-disable react/prop-types */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-hot-toast";

const MealsCart = ({ meals, addToCart }) => {
  const { strMeal, strMealThumb, strArea } = meals;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={strMealThumb} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{strMeal}</h2>
        <p>{strArea}</p>
        <div className="w-full">
          <button
            onClick={() => addToCart(meals)}
            className="btn btn-primary w-full hover:bg-amber-400 hover:text-black"
          >
            Add To Card
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealsCart;
