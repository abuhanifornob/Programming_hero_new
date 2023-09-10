/* eslint-disable react/prop-types */
import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const Cart = ({ cartProduct, handleClearCart, children }) => {
  console.log(children);
  let price = 0;
  let shippingCharge = 0;
  let productQuentity = 0;
  for (const product of cartProduct) {
    price = price + product.price * product.quantity;
    productQuentity = productQuentity + product.quantity;
    shippingCharge = shippingCharge + product.shipping;
  }
  const txt = (price * 7) / 100;
  const grandTotal = price + txt;

  // const handleClearCart = () => {
  //   console.log("handle Clar Cart");
  // };

  return (
    <div className="cart-container">
      <h4>Order Summary</h4>
      <p>Selected Item :{productQuentity} </p>
      <p>Total Price : ${price}</p>
      <p>Total Shipping Charge : ${shippingCharge}</p>
      <p>Txt : ${txt}</p>
      <h6 className="grandTotal">Grand Total : ${grandTotal}</h6>
      <button className="clear-btn" onClick={handleClearCart}>
        Clear Cart
        <FontAwesomeIcon className="font-icons deleteIcon" icon={faTrash} />
      </button>
      {children}
    </div>
  );
};

export default Cart;
