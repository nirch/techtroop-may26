import { getList, addItem } from "./model.js";

// UI - presentation logic
function refreshShoppingList(shoppingList) {
  const ul = document.querySelector("#shoppingList");

  // 1) delete UI
  ul.innerHTML = "";

  // 2) Loop over shopping items and add then to the list
  for (const item of shoppingList) {
    const li = document.createElement("li");
    li.textContent = item.name;
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
});
