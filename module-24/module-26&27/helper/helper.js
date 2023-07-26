function getInputFieldValue(inputFiled) {
  const inputElement = document.getElementById(inputFiled);
  const inputVlaue = inputElement.value;
  return inputVlaue;
}
function getTextFieldValue(textFiled) {
  const textElement = document.getElementById(textFiled);
  const textVlaue = textElement.innerText;

  return textVlaue;
}
function setTextFieldValue(textField, setText) {
  const textElement = document.getElementById(textField);
  textElement.innerText = setText;
}
