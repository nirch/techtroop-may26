import { getBalance } from "./banking.js";
import { displayMenu, getMenuChoice, displayBalance } from "./ui.js";

function handleChoice(choice) {
  switch (choice) {
    case "1":
      handleBalance()
      break;
    case "2":
      break;
    case "3":
      break;
    case "4":
      break;
    default:
      break;
  }
}

function handleBalance() {
  const balance = getBalance();
  displayBalance(balance);
}

function run() {
  // loop until choice === 4
  displayMenu();
  // loop until choice 1 - 4
  const choice = getMenuChoice();
  handleChoice(choice);
}

run();
