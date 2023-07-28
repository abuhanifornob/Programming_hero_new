function getInputValue(inputElement) {
  const value = document.getElementById(inputElement).value;

  return parseFloat(value);
}
function setValue(setElement, content) {
  const totalPlayerCosSetElement = document.getElementById(setElement);
  totalPlayerCosSetElement.innerHTML = content;
}
