document
  .getElementById("withdrawBtn")
  .addEventListener("click", function (event) {
    const withdrawAmount = parseFloat(getInputFieldValue("withdraw"));
    const previousTotalBalance = parseFloat(getTextFieldValue("total-balance"));

    if (withdrawAmount > previousTotalBalance) {
      alert("Ivalide Amount , Please check your Balance ");
    } else {
      const previousTotalWithdrawAmount = parseFloat(
        getTextFieldValue("total-withdraw")
      );
      const newTotalWithdrawAmount =
        withdrawAmount + previousTotalWithdrawAmount;
      setTextFieldValue("total-withdraw", newTotalWithdrawAmount);
      // set total Balance Amount

      const newTotalBalance = previousTotalBalance - withdrawAmount;
      setTextFieldValue("total-balance", newTotalBalance);

      document.getElementById("withdraw").value = "";
    }
  });
