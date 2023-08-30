document.getElementById("incressBtn").addEventListener("click", function () {
  let counterValue = getStorageCounter();

  counterValue += 1;
  setStorageCounter(counterValue);
  displayCounterValue(counterValue);
  //   setStorageCounter(countingValue);
  //   displayCounterValue(countingValue);
});

const getStorageCounter = () => {
  let counter = parseInt(localStorage.getItem("counter"));
  return counter;
};

const setStorageCounter = (counterValue) => {
  localStorage.setItem("counter", counterValue);
};

const displayCounterValue = (counterValue) => {
  const countingElement = document.getElementById("counting");
  countingElement.innerText = counterValue;
};

// displayCounterValue(counterValue);
