let groceryList = [];
let itemInput = document.querySelector("#grocery-input");
let btnAdd = document.querySelector("#add-item-btn");

let groceryListElement = document.querySelector("#grocery-list"); // This will display the list
let errorMessage = document.querySelector(".errorMessage");

document.addEventListener("DOMContentLoaded", () => {
  groceryListElement.innerHTML = "";
  errorMessage.textContent = "";
});

btnAdd.addEventListener("click", (e) => {
  e.preventDefault();
  getItem();
});

const getItem = () => {
  let item = itemInput.value.trim();
  itemInput.value = "";

  // console.log(item);
  //   console.log(groceryList);
  if (item) {
    groceryList.push(item);
    displayItem();
    errorMessage.textContent = "Item added successfully";
    errorMessage.style.color = "white";
  } else {
    errorMessage.textContent = "The input field cannot be empty";
    errorMessage.style.color = "red";
  }
};

const displayItem = () => {
  groceryListElement.innerHTML = "";
  errorMessage.textContent = "";
  // console.log('hello')
  console.log(groceryList);

  groceryList.forEach((item, idx) => {
    let liItem = document.createElement("li");
    liItem.classList.add(
      "col-12",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );

    let itemSpan = document.createElement("span");
    itemSpan.textContent = item;
    // console.log(item);
    // console.log(liItem);
    // liItem.innerText = item;

    let removeBtn = document.createElement("button");
    removeBtn.classList.add("btn", "btn-danger");
    removeBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

    removeBtn.addEventListener("click", () => {
      console.log("remove btn clicked");
      groceryList.splice(idx, 1);
      console.log(groceryList);
      
      errorMessage.textContent = "Item deleted successfully!";
      errorMessage.style.color = "red";
      setTimeout(()=> {
        displayItem();
      }, 1000)
      
    });

    groceryListElement.appendChild(liItem);
    liItem.appendChild(itemSpan);
    liItem.appendChild(removeBtn);
  });
};
