import { getShoppingCart } from "../../resorce/utilities/fakedb";

const cartProductLoader = async () => {
  const loadedProducts = await fetch("products.json");
  const products = await loadedProducts.json();
  const selectedProduct = getShoppingCart();
  const saveProduct = [];
  for (const id in selectedProduct) {
    const orderProduct = products.find((product) => product.id === id);
    if (orderProduct) {
      const quentity = selectedProduct[id];
      orderProduct.quantity = quentity;
      saveProduct.push(orderProduct);
    }
  }

  return { saveProduct };
};

export default cartProductLoader;
