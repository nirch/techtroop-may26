
// Closure "Magic"

function foo() {
  let y = 20;

  function innerFoo() {
    let w = 50;
    console.log(w + y);
  }

  return innerFoo;
}

// innerFoo();           // Error

const myFoo = foo();
myFoo();                 // 70 - Error y not defined | undefined20 | Error function not defined | 70

foo()();

// // *** Simple Scope
// let x = 10;             // Browser (global scope), NodeJS (local module)

// function foo() {
//   let y = 20;           // Local scope
//   console.log(x + y);   // 30
// }
// foo();

// console.log(y);         // Reference Error

// Nested Scope
// function foo() {
//   let y = 20;             // Closure Scope

//   function innerFoo() {
//     let w = 50;           // Local
//     console.log(y + w);   // 70
//   }
//   innerFoo();
// }
// foo();

// Nested Chain Scope
// function foo() {
//   let y = 20;

//   function innerFoo() {
//     let w = 50;
//     console.log(y + w);           // 70
//     function innerInnerFoo() {
//       console.log(y + w);         // 70 (nested scope chain)
//     }
//     innerInnerFoo();
//   }
//   innerFoo();
// }
// foo();


function moo() {
  let x = 1;
  setTimeout(() => {
    console.log(x)
  }, 5000);
}
moo();
console.log("EOF");




// Closures in Functional Programming



console.log(add(5)(2));       // 7
console.log(add(19)(2));      // 21





