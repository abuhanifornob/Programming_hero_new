import React, { useEffect, useState } from "react";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import { toast } from "react-hot-toast";

const Meals = () => {
  const [mealsProducts, setMealsProducts] = useState([]);
  const [mealCartProduct, setMealCartProduct] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => setMealsProducts(data.meals));
  }, []);

  const addToCart = (meals) => {
    const exist = mealCartProduct.find((prod) => prod.idMeal === meals.idMeal);
    if (!exist) {
      const newCartProduct = [...mealCartProduct, meals];
      setMealCartProduct(newCartProduct);
    } else {
      toast.error("already This Product Add");
    }
  };

  return (
    <div className="mealsContainer grid grid-cols-12 ">
      <div className=" col-span-10">
        <Products
          mealsProducts={mealsProducts}
          addToCart={addToCart}
        ></Products>
      </div>
      <div className="col-span-2 bg-amber-300 ">
        <Cart mealCartProduct={mealCartProduct}></Cart>
      </div>
    </div>
  );
};

export default Meals;
