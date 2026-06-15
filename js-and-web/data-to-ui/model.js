const shoppingList = [
  {
    id: "111",
    name: "Milk",
    completed: false
  },
  {
    id: "222",
    name: "Honey",
    completed: true
  },
  {
    id: "333",
    name: "Bread",
    completed: false
  },
]

export function getList() {
  const shoppingListClone = [...shoppingList];
  return shoppingListClone;
}

export function addItem(itemName) {
  shoppingList.push({
    id: randomId(),
    name: itemName,
    completed: false
  })
}

function randomId() {
  return new Date().getMilliseconds();
}