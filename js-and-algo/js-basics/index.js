// 'use strict'

console.log("Hello from Node.JS!");

// alert("Hello Alert!");       // this crashes since alert doesn't exist in node.js

// Primitive Variables

// Types
// number (3, 3.4, -99.2)
// string ("aaaaa", "a", 'this is also a string', "don't", 'I am quoting: "bla bla"')
// boolean (true, false)
//
// undefined

// JavaScript - Loosely Typed (Dynamic Type)

let x; // undefined
x = 5; // number
x = "Hello"; // string
x = true; // boolean

console.log(x); // true
console.log(typeof x); // boolean

// let, var, const
y = 10;
// var y = 10;    // similar to the above
console.log(y);

// var vs. let
// var is ES3 syntax
// var has a bigger scope than let
console.log(i);
for (var i = 0; i <= 10; i++) {}
console.log(i);

for (let j = 0; j <= 10; j++) {}
// console.log(j);    // Error - let scope is only the block 

// const is ES6
const myConst = 10;
// myConst = 20;         // Error

// Template Literal
// `I am ${age} years old`


x = null;
console.log(typeof x);

x = 10;
x += "bla";
console.log(x);            // "10bla"
console.log(typeof x);     // "string"

// variables names must start with a letter, _ or $
// let 1num = 10;            // error

// operators
// =, ++, +=, ...

let person = {
  fname: "John",
  "lname": "Doe",
  age: 30,
  isMale: true,
  address: {
    street: "Hertzel",
    number: 99,
    city: "Tel Aviv"
  },
  sayName: function() {
    // console.log("My name is " + this.fname + " " + this.lname);
    console.log(`My name is ${this.fname} ${this.lname}`);
  }
}

// access prop/ket in object
console.log(person.age);
console.log(person["age"]);

let propName = "age";
console.log(person[propName]);    // 30

// nested objects
console.log(person.address.city);

person.sayName();

// adding a new key
person.height = 180;


console.log("EOF");


let arr = [2, 4, 54, -1];
console.log(arr[0]);                // 2
console.log(arr[arr.length - 1]);   // -1 
console.log(arr[-1]);               // -1 

arr.push(10);
console.log(arr);