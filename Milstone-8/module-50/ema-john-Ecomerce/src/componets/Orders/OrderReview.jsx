/* eslint-disable react/prop-types */
import React from "react";
import "./review.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const OrderReview = ({ reviewProduct, handleRemoveCart }) => {
  // eslint-disable-next-line react/prop-types
  const { img, name, price, shipping, quantity, id } = reviewProduct;
  return (
    <div className="review-cart">
      <div className="cart-info">
        <div>
          <img className="review-img" src={img} alt="" />
        </div>
        <div>
          <p>{name}</p>
          <p>Product Quentity: {quantity}</p>
          <p>Price : ${price}</p>
          <p>Shipping Charge : ${shipping}</p>
        </div>
      </div>
      <div className="deleteButton">
        <button className="btn-delete" onClick={() => handleRemoveCart(id)}>
          <FontAwesomeIcon className="font-icons deleteIcon" icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default OrderReview;
