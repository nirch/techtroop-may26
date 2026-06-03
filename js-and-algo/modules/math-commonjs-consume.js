
// const math = require("./math-commonjs");
// console.log(math.add(5, math.PI));

const { add, PI } = require("./math-commonjs");
console.log(add(5, PI));


// Destructuring
const obj = {
  a: 10,
  b: 20,
  c: 30
};

const { a } = obj;
console.log(a);