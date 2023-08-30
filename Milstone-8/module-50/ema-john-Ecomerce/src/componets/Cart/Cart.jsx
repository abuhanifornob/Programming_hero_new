/* eslint-disable react/prop-types */
import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cartProduct = props.cartProduct;
  console.log(cartProduct);
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

  return (
    <div className="cart-container">
      <h4>Order Summary</h4>
      <p>Selected Item :{productQuentity} </p>
      <p>Total Price : ${price}</p>
      <p>Total Shipping Charge : ${shippingCharge}</p>
      <p>Txt : ${txt}</p>
      <h6 className="grandTotal">Grand Total : ${grandTotal}</h6>
    </div>
  );
};

export default Cart;
