function displayProduct(product, quentity) {
  const displayList = document.getElementById("show_list");
  const li = document.createElement("li");
  li.innerHTML = `
        ${product}  ${quentity}
    `;
  displayList.appendChild(li);
}
document
  .getElementById("addProductList")
  .addEventListener("click", function () {
    const productNameElement = document.getElementById("productName");
    const productQtyElement = document.getElementById("productQty");
    const productName = productNameElement.value;
    const productQty = productQtyElement.value;

    productNameElement.value = "";
    productQtyElement.value = "";
    setStoredShopingCard(productName, productQty);
    displayListFormLocatStrorages();
  });

const getStoredShopingCart = () => {
  let cart = {};
  const storedCard = localStorage.getItem("cart");
  if (storedCard) {
    cart = JSON.parse(storedCard);
  }
  return cart;
};

const setStoredShopingCard = (product, quentity) => {
  const cart = getStoredShopingCart();
  cart[product] = quentity;
  const cartStingify = JSON.stringify(cart);
  localStorage.setItem("cart", cartStingify);
};

const displayListFormLocatStrorages = () => {
  const cart = getStoredShopingCart();
  const displayList = document.getElementById("show_list");

  for (const product in cart) {
    let productQty = cart[product];
    displayProduct(product, productQty);
  }
};
