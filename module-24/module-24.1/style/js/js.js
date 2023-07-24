console.log("This is Js Functionality");
console.log(document.body);

const tagNmae = document.getElementsByTagName("li");
console.log(tagNmae);
for (const item of tagNmae) {
  console.log(item.innerText);
}

for (const item of tagNmae) {
  console.log(item.innerHTML);
}

const classList = document.getElementsByClassName("mern-topic");
console.log(classList);

const getId = document.getElementById("mern-section");
const h1 = document.createElement("h1");
h1.innerText = "This is Mern Strak Topicic Details";
getId.appendChild(h1);
console.log(getId);
console.log(getId.innerHTML);
console.log(getId.innerText);

getId.classList.add("borderAdd");
const getPlacessId = document.querySelector("#placessSection");
console.log(" placessSection is", getPlacessId);
getPlacessId.classList.remove("bacground_add");
getPlacessId.setAttribute("title", "Tjhis is Title toiltips");
