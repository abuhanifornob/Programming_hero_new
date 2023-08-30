/* eslint-disable react/prop-types */
import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  // eslint-disable-next-line react/prop-types
  const { img, name, price, ratings, seller } = props.product;
  const addTocart = props.addTocart;

  return (
    <div className="product-cart">
      <img className="cart-image" src={img} alt="" />
      <div className="production-info">
        <h5 className="name">{name}</h5>
        <h5 className="price">Price :${price}</h5>
        <h6 className="seller"> Manufacture: {seller}</h6>
        <h6 className="rating">Rating: ${ratings} start</h6>
      </div>

      <button className="car-button" onClick={() => addTocart(props.product)}>
        Add to Card
        <FontAwesomeIcon className="font-icons" icon={faShop} />
      </button>
    </div>
  );
};

export default Product;
