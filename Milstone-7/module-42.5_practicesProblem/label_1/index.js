localStorage.setItem("name", "Abu Hanif");
localStorage.setItem("age", 27);
localStorage.removeItem("age");
console.log(localStorage.getItem("name"));
const fullName = {
  firstName: "Abu Hanif",
  lastName: "Arnob",
};
const stName = JSON.stringify(fullName);
console.log(stName);
localStorage.setItem("name", stName);
