import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import OrderReview from "./OrderReview";
import "./review.css";
import {
  deleteShoppingCart,
  removeFromDb,
} from "../../resorce/utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const Orders = () => {
  const { saveProduct } = useLoaderData();
  const [cart, setCart] = useState(saveProduct);

  const handleRemoveCart = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
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
        <Cart cartProduct={cart} handleClearCart={handleClearCart}>
          <Link to="/proceed">
            <button className="check-btn">
              Proceed Checkout
              <FontAwesomeIcon
                className="font-icons checkIcon"
                icon={faCheckSquare}
              />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
