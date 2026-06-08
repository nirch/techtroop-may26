let currentBalance = 100;

export function getBalance() {
  return currentBalance;
}

export function deposit(amount) {
  // input validation

  currentBalance += amount;

  // return value: success/error
}

export function withdraw(amount) {
  // input validation
  // - amount is a number
  // - amount is not negative
  // - currentBalance - amount > 0

  currentBalance -= amount;

  // return value: {success: true/false, message:}
}

function isValidAmount() {
  //...
}


// Tests... (preferred in unit tests)






// export default class Banking {
//   ...
// }


