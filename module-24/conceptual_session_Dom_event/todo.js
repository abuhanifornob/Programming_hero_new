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
      event.target.parentNode.parentNode.style.display = "none";
    });
  }
});
