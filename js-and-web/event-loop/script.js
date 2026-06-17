function foo() {
  let x = 2;
  return bar() * x;
}

function bar() {
  const num = 3;
  return moo() + num;
}

function moo() {
  return 1;
}

const res = foo();

console.log(res);

setTimeout(() => {
  console.log("Timer done");
}, 2000);

function print() {
  console.log("Hello World!");
}

function start() {
  calcSum();

  // setTimeout(() => {
  //   calcSum();
  // }, 0);

  // axios.get("/movies").then(response => {
  //   // process data
  // });
}

function calcSum() {
  let sum = 0;
  for (let i = 0; i < 2000000000; i++) {
    sum += i;
  }
  console.log("sum = " + sum);
}

setTimeout(() => {
  calcSum();
}, 0);


function countContinously(currNum, sum, resolve) {
  const step = 1000;
  const max = 2000000000;

  for (let j = currNum; j < currNum + step; j++) {
    sum += j
  }
  if (currNum >= max) {
    resolve(sum)
  } else {
    setTimeout(() => {
      countContinously(currNum + step, sum, resolve)
    }, 0)

  }
}

countContinously(0, 0, (result => console.log('result = ' + result)));


// async function calcSum() {
//   let sum = 0;
//   for (let i = 0; i < 2000000000; i++) {
//     sum += i;
//   }
//   console.log("sum = " + sum);
// }

function calcSum() {
  return new Promise((resolve, reject) => {
    let sum = 0;
    for (let i = 0; i < 2000000000; i++) {
      sum += i;
    }
    console.log("sum = " + sum);
  });
}

console.log("eof");
