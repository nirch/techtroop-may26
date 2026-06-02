function greetUser(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

function afterGreeting() {
  console.log("Nice to meet you");
}

greetUser("John", afterGreeting);

greetUser("Sarah", function () {
  console.log("Hello from inline anonymous callback function");
});

setTimeout(afterGreeting, 0);

setTimeout(afterGreeting, 2000);

setTimeout(function () {
  console.log("I am async");
}, 2000);

function calc(num1, num2, operation) {
  console.log(`Calculating: ${num1} and ${num2}`);

  const result = operation(num1, num2);

  console.log("result = " + result);
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}


calc(5, 3, add);
calc(5, 3, multiply);
calc(5, 3, function(a, b) {
  return a / b;
});


console.log("EOF");
