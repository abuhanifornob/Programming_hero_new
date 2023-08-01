const loadProductData = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

const menuDisplay = async () => {
  const productData = await loadProductData();
  const product_catagory = document.getElementById("product_catagory");

  diaplayData(productData);
  const uniqueProducts = [];
  for (const product of productData) {
    if (uniqueProducts.indexOf(product.category) === -1) {
      uniqueProducts.push(product.category);
    }
  }
  for (const product of uniqueProducts) {
    const li = document.createElement("li");
    li.innerHTML = `
    <a>${product}</a>
    `;
    product_catagory.appendChild(li);
  }
};
const diaplayData = async (productData) => {
  const product_card_section = document.getElementById("product_card_section");

  product_card_section.innerHTML = "";
  productData.forEach((element) => {
    const div = document.createElement("div");
    const { category, description, image } = element;
    div.innerHTML = `
 <div class="card bg-base-100 shadow-xl">
 <figure class="px-10 pt-10">
   <img
     src="${image}"
     alt="Shoes"
     class="rounded-xl h-40"
   />
 </figure>
 <div class="card-body items-center text-center">
   <h2 class="card-title">${category}</h2>
   <p>${
     description.length > 20 ? description.slice(0, 20) + "...." : description
   }</p>
   <div class="card-actions">
     <button class="btn btn-primary">Show Details</button>
     <button class="btn" onclick="my_modal_5.showModal("hello")">open modal</button>
   </div>
 </div>
</div>
 
 `;
    product_card_section.appendChild(div);
  });
};

document
  .getElementById("inputFieldId")
  .addEventListener("keypress", async (event) => {
    const notFound = document.getElementById("notFound");
    if (event.key === "Enter") {
      const searchValue = document.getElementById("inputFieldId").value;
      document.getElementById("inputFieldId").value = "";
      const data = await loadProductData();
      const foundProduct = data.filter((product) =>
        product.category.includes(searchValue)
      );
      console.log();
      if (foundProduct.length === 0) {
        notFound.classList.remove("hidden");
        const product_card_section = document.getElementById(
          "product_card_section"
        );

        product_card_section.innerHTML = "";
      } else {
        notFound.classList.add("hidden");
        diaplayData(foundProduct);
      }
    }
  });

// const spning = async (isLoading) => {
//   const loading = document.getElementById("loading");
//   if (isLoading) {
//     console.log(isLoading);
//     loading.classList.add("hidden");
//   } else {
//     console.log(isLoading);
//     loading.classList.remove("hidden");
//   }
// };
const showModal = async (hello) => {
  console.log("helo");
};
menuDisplay();
