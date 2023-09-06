import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import OrderReview from "./OrderReview";
import "./review.css";
import { removeFromDb } from "../../resorce/utilities/fakedb";

const Orders = () => {
  const { saveProduct } = useLoaderData();
  const [cart, setCart] = useState(saveProduct);

  const handleRemoveCart = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((product) => (
          <OrderReview
            key={product.id}
            reviewProduct={product}
            handleRemoveCart={handleRemoveCart}
          ></OrderReview>
        ))}
      </div>
      <div className="cart-container">
        <Cart cartProduct={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
