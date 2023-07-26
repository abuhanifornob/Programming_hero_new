document
  .getElementById("depositBtn")
  .addEventListener("click", function (event) {
    const depositAmount = parseFloat(getInputFieldValue("deposit"));
    const previousTotalDepositAmount = parseFloat(
      getTextFieldValue("total-deposit")
    );
    const newTotalDepositAmount = depositAmount + previousTotalDepositAmount;
    setTextFieldValue("total-deposit", newTotalDepositAmount);
    // set total Balance Amount
    const previousTotalBalance = parseFloat(getTextFieldValue("total-balance")); //
    console.log(previousTotalBalance);
    const newTotalBalance = depositAmount + previousTotalBalance;
    setTextFieldValue("total-balance", newTotalBalance);

    document.getElementById("deposit").value = "";
  });
