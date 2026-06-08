import promptSync from "prompt-sync";
const prompt = promptSync();

export function displayMenu() {
  console.log("=== Banking System ===");
  console.log("1) Check Balance");
  console.log("2) Deposit Money");
  console.log("3) Withdraw Money");
  console.log("4) Exit  ");
}

export function getMenuChoice() {
  const input = prompt('Choose option (1 - 4): '); 
  // input validation + potential loop - this can also be in the controller (app.js)
  return input;
}

export function showErrorMessage(message) {
  console.log("⚠️ Error: " + message);
}

export function displayBalance(balance) {
  console.log(`Current balance: ${balance}`);
}