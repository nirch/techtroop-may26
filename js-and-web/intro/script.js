console.log("Hello from JS!");
const myP = document.getElementById("my-p");
console.log(myP);
myP.innerHTML = "JS changed this content!";

const person = {
  name: "John",
  age: 33
}

console.log(person);
person.age = 50;


setTimeout(() => {
  // debugger;
  person.age = 100;
}, 2000)