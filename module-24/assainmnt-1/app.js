const selectedPlayerArray = [];
function playerDisplay(player) {
  const selectedPlayerListElement =
    document.getElementById("selectedPlayerList");
  selectedPlayerListElement.innerHTML = "";
  for (let i = 0; i < selectedPlayerArray.length; i++) {
    const name = selectedPlayerArray[i];
    const li = document.createElement("li");
    const classesToAdd = "mb-4 ps-5 text-2xl font-bold";
    li.className += `${classesToAdd}`;
    li.innerHTML = `
    ${name}
    `;

    selectedPlayerListElement.appendChild(li);
  }
}
function selectPlayer(playerInfo) {
  //   console.log(playerInfo.parentNode.parentNode.children[0]);
  const name = playerInfo.parentNode.parentNode.children[0].innerHTML;
  const buttonElement = playerInfo;
  if (selectedPlayerArray.length >= 5) {
    alert("Already Selected Five Players");
  } else {
    buttonElement.setAttribute("disabled", "true");
    selectedPlayerArray.push(name);
    playerDisplay(selectedPlayerArray);
  }
}

document
  .getElementById("playerCaostCalculaton")
  .addEventListener("click", function () {
    const perPlayercost = getInputValue("budget"); // get per Playcer cost in perplaycer cost
    if (!perPlayercost) {
      alert("Please Fillup firstly per Player cost Field");
    } else {
      const totalPlayerCost = perPlayercost * 5; // calculate totalPlaycer Cost
      setValue("playerCost", totalPlayerCost); // set Value Perplayer Cost Element
    }
  });

document
  .getElementById("totalCalculation")
  .addEventListener("click", function () {
    const managerCost = getInputValue("manager");
    const playerCost = document.getElementById("playerCost").innerHTML;
    const coachCost = getInputValue("coach");
    if (!managerCost || !coachCost || playerCost === "0") {
      alert("Worng");
    } else {
      const totalCost = parseFloat(playerCost) + managerCost + coachCost;
      setValue("total", totalCost);
    }
  });
