// Function to append a character to the display
function appendCharacter(char) {
  const display = document.getElementById("display");
  display.value += char;
}

// Function to clear the display
function clearDisplay() {
  const display = document.getElementById("display");
  display.value = "";
}

// Function to delete the last character from the display
function deleteLastCharacter() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

// Function to evaluate the expression and display the result
function evaluate() {
  console.log("equal btn add");
  try {
    const display = document.getElementById("display");

    const result = eval(display.value); // Using eval() for simplicity (be cautious in production)
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}
