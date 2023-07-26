document.getElementById("loginBtn").addEventListener("click", function () {
  const email = getInputFieldValue("email");
  const password = getInputFieldValue("password");
  console.log(password);
  console.log(typeof password);
  if (email === "hanifcse90@gmail.com" && password === "secret") {
    alert("Welcove to baoer Bank");
    window.location.href = "bank.html";
  } else {
    alert(
      "Worn password or Email , Please Enter your Valid Email and Password"
    );
  }
});
