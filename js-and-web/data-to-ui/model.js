const shoppingList = [
  {
    id: "111",
    name: "Milk",
    picked: false
  },
  {
    id: "222",
    name: "Honey",
    picked: false
  },
  {
    id: "333",
    name: "Bread",
    picked: true
  },
]

export function getList() {
  const shoppingListClone = [...shoppingList];
  return shoppingListClone;
}

export function addItem(itemName) {
  shoppingList.push({
    name: itemName,
    picked: false
  })
}