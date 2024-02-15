console.log("FrontEng JS ishga tushdi");

function itemTemplate(item) {
  return `<li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
    <span class="item-text">${item.reja}</span>
    <div>
      <button data-id="${item._id}" class="edit-me btn btn-info" style="border-radius: 20px;">Change Plan</button>
      <button data-id="${item._id}" class="delete-me btn btn-danger" style="border-radius: 20px;">Delete Plan</button>
    </div>
  </li>`;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", (e) => {
  e.preventDefault();
  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
        createField.value = "";
        createField.focus();
    })
    .catch((err) => {
        console.log("Iltimos qaytadan harakat qiling!")
    });
});

document.addEventListener("click", function (e) {
  // delete operations
  if (e.target.classList.contains("delete-me")) {
    if(confirm("Are you sure you want to delete it?")) {
      axios
      .post("/delete-item", {id: e.target.getAttribute("data-id")})
      .then((response) => {
        console.log(response.data)
        e.target.parentElement.parentElement.remove();
      })
      .catch((err) => { 
        console.log("Iltimos qaytadan harakat qiling!")
      });
    }
  }

  //edit operations
  if(e.target.classList.contains("edit-me")) {
    alert("You clicked edit button")
  }
})