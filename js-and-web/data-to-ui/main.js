import { getList, addItem } from "./model.js";

// UI - presentation logic - translates data to UI
function refreshShoppingList(shoppingList) {
  const ul = document.querySelector("#shoppingList");

  // 1) delete UI
  ul.innerHTML = "";

  // 2) Loop over shopping items and add then to the list
  for (const item of shoppingList) {
    const li = document.createElement("li");
    li.textContent = item.name;
    // li.setAttribute("data-id", item.id);
    if (item.completed) {
      li.classList.add("completed");
    }

    li.addEventListener("click", () => {
      // this better be a function that updates the model toggleItem(item)
      item.completed = !item.completed;
      refreshShoppingList(getList());
    })

    ul.appendChild(li);
  }
}

// Controller
addEventListener("DOMContentLoaded", () => {
  refreshShoppingList(getList());

  document.querySelector("#btnAdd").addEventListener("click", () => {
    const input = document.querySelector("#inputNew");
    const newItemValue = input.value;
    // validate new item...
    addItem(newItemValue);
    refreshShoppingList(getList());
    input.value = "";
  });

  // ul.children.addEventListener('click', (event) => {
  //     const li = event.target;
  //     const id = li.getAttribute("data-id");
  //     // item.completed = !item.completed;
  // });
});
