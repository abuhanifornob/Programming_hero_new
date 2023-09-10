import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../resorce/utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cartProduct, setcartProduct] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedProduct = getShoppingCart();
    let saveLocalStorageToCartProducts = [];
    console.log(storedProduct);
    for (const id in storedProduct) {
      const addProduct = products.find((product) => product.id === id);
      console.log(addProduct);
      if (addProduct) {
        const quentity = storedProduct[id];
        addProduct.quantity = quentity;
        saveLocalStorageToCartProducts.push(addProduct);
      }
    }
    setcartProduct(saveLocalStorageToCartProducts);
  }, [products]);

  const addTocart = (productItem) => {
    let saveToCartProduct = [];
    // const exist = dbCartProducts.find((prod) => prod === productItem.id);

    const exist = cartProduct.find((pro) => pro.id === productItem.id);
    if (!exist) {
      productItem.quantity = 1;
      saveToCartProduct = [...cartProduct, productItem];
    } else {
      exist.quantity = exist.quantity + 1;
      const remaining = cartProduct.filter((pro) => exist.id !== pro.id);
      saveToCartProduct = [...remaining, exist];
    }

    setcartProduct(saveToCartProduct);
    addToDb(productItem.id);
  };
  const handleClearCart = () => {
    setcartProduct([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addTocart={addTocart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cartProduct={cartProduct} handleClearCart={handleClearCart}>
          <Link to="/review">
            <button className="check-btn">
              Review Order
              <FontAwesomeIcon
                className="font-icons checkIcon"
                icon={faArrowCircleRight}
              />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
