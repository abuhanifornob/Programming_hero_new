const productArry = [];

function purchesProduct(product) {
  const tableBodyElement = document.getElementById("tableBody");
  tableBodyElement.innerHTML = "";
  let totalPrice = 0;
  for (let i = 0; i < product.length; i++) {
    console.log(product[i]);
    const name = product[i].productName;
    const price = product[i].productPrice;
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <th>${i + 1}</th>
     <td>${name}</td>
    <td>${price}</td>
    
    `;
    tableBodyElement.appendChild(tr);
    totalPrice = totalPrice + price;
  }
  console.log(totalPrice);
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <th></th>
     <td>Total price</td>
    <td>${totalPrice}</td>
    
    `;
  tableBodyElement.appendChild(tr);
}

function addToCard(cartInfo) {
  const productName = cartInfo.parentNode.parentNode.children[0].innerHTML;
  const productPrice =
    cartInfo.parentNode.parentNode.children[1].children[0].innerHTML;
  console.log(productName, productPrice);
  const object = {
    productName: productName,
    productPrice: parseFloat(productPrice),
  };
  productArry.push(object);
  const selectedProductQty = productArry.length;

  document.getElementById("selectedProductQty").innerHTML = selectedProductQty;
  purchesProduct(productArry);
}
