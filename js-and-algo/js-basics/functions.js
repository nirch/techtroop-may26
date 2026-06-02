function printHello() {
  console.log("Hello");

  // all function return value
  // by default undefined is returned
  // return undefined;
}

console.log(printHello());
console.log(typeof printHello);
console.log(printHello); // <- here I am sending a function to console.log

function printName(fname, lname) {
  let greeting = `Hello ${fname} ${lname}`;
  console.log(greeting);

  console.log(arguments);
  if (arguments.length > 2) {
    console.log("and my age is " + arguments[2]);
  }
}

printName("John", "Doe");

let a = "Sarah";
let b = "Doe";
printName(a, b);

// sending less or more params
printName("John"); // Hello John undefined
printName(); // Hello undefined undefined
printName("John", "Doe", 33); // Hello John Doe

// Function Overload
// function createDate(day, month, year);    // 1, 1, 2025
// function createDate(string);              // "2025-01-01"
// function createDate(milliseconds);        // 743893939287

// JavaScript Method Overloading
function createDate() {
  if (arguments.length === 1 && typeof arguments[0] === "number") {
    let milliseconds = arguments[0];
  } else if (arguments.length === 1 && typeof arguments[0] === "string") {
    let stringFormat = arguments[0];
  } //...
}

function getFullName(fname, lname) {
  return fname + " " + lname;
}

let myName = getFullName("John", "Doe");
console.log(getFullName("John", "Doe"));