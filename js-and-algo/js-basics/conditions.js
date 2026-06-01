
let x = 5;
let y = "5";

if (x == y) { }       // TRUE

if (x === y) { }      // FALSE

// always use === and !==  over == and != 

let p1 = {
  fname: "John",
  lname: "Doe",
  age: 35,
};

let p2 = p1;

if (p1 === p2)  {}    // TRUE

p2 = {};
p2.fname = p1.fname;
p2.lname = p1.lname;
p2.age = p1.age;

if (p1 === p2)  {}    // FALSE

console.log(p1);
console.log(p2);

if (p1.fname === p2.fname &&
    p1.lname === p2.lname &&
    p1.age === p2.age) {            // TRUE

}

if (JSON.stringify(p1) === JSON.stringify(p2)) {}


// FALSY Values
// 0
// null
// undefined
// ""

let x = 0;
let str = "";

if (x) {}       // FALSE
if (str === "")  {}    // TRUE
if (str)  {}    // FALSE

if (person && person.age == 30) {}
if (person?.age == 30) {}

// ? :

let w = x > 10 ? "bla" : "foo";

// if (...) {

// } else if (...) {

// } else {

// }