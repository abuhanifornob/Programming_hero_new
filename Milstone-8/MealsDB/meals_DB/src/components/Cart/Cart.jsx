/* eslint-disable react/prop-types */
import React from "react";

const Cart = ({ mealCartProduct }) => {
  console.log(mealCartProduct);
  return (
    <div className="cartContainer sticky top-0 p-4">
      <h4 className="text-center text-2xl font-extrabold">Order Summary</h4>
      <p>Total Product: {mealCartProduct.length}</p>
      <ul>
        {mealCartProduct.map((pro) => (
          <li key={pro.idMeal}>{pro.strMeal}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
