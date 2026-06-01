
let x = 10;
let y = x;
console.log(y);         // 10

y = 20;
console.log(y);         // 20
console.log(x);         // 10

let p1 = {
  fname: "John",
  lname: "Doe",
  age: 35,
  address: {
    city: "Tel Aviv"
  }
}

let p2 = p1;
console.log(p2.age);    // 35

p2.age = 20;
console.log(p2.age);    // 20
console.log(p1.age);    // 20? 35?

let p3 = {...p1};       // spread operator - copy/clone (shallow)

p3.age = 100;
console.log(p1.age);    // 20

p3.address.city = "Jerusalem";
console.log(p1.address.city);   


// deep clone - to JSON -> to Object    - YOU WILL LOSE FUNCTION
// You can also do a deep clone with lodash lib
let p4 = JSON.parse(JSON.stringify(p1));


