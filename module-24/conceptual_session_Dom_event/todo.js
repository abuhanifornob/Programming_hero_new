let number = 0;
document.getElementById("addBtn").addEventListener("click", function () {
  number++;
  const todoItem = document.getElementById("todoItem").value;
  const tableBody = document.getElementById("tableBody");
  const tr = document.createElement("tr");
  tr.innerHTML = `

                <th>${number}</th>
                <td>${todoItem}</td>
                <td>
                <button class="btn btn-primary delete">Delete</button>
                  <button class="btn btn-success done">Done</button>
                </td>
             
 
 `;
  tableBody.appendChild(tr);
  document.getElementById("todoItem").value = "";
  const deleteBtnList = document.getElementsByClassName("delete");
  for (let btn of deleteBtnList) {
    btn.addEventListener("click", function (event) {
      console.log(event.target);
      number--;
      event.target.parentNode.parentNode.style.display = "none";
    });
  }
  const doneBtnList = document.getElementsByClassName("done");
  for (let btn of doneBtnList) {
    btn.addEventListener("click", function (event) {
      event.target.parentNode.parentNode.classList = "line-through";
      //   event.target.parentNode.parentNode.classList = "disabled";
    });
  }
});

document.getElementById("clearBtn").addEventListener("click", function (event) {
  document.getElementById("tableBody").style.display = "none";
});
