for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let numArr = [2, 87, 902, 92, -91, 3];
for (let i = numArr.length - 1; i >= 0; i--) {
  console.log(numArr[i]);
}

let x = 0;
while (x <= 10) {
  console.log(x);
  x++;
}

// for of - loop over array
for (const num of numArr) {
  console.log(num);
}

// for in - loops over object keys
let person = {
  fname: "John",
  lname: "Doe",
  age: 30,
};

for (const prop in person) {
  console.log(`${prop}: ${person[prop]}`);
}

numArr.forEach(function(num) {
  console.log(num);
});