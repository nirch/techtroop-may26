// A function that returns a Promise - is an Asynchronous function

const simplePromise = new Promise((resolve, reject) => {
  resolve("Hello World!");
});

function simplePromise2() {
  return new Promise((resolve, reject) => {
    resolve("Hello World!");
  });
}

// Coin Flip - resolved = Heads, rejected = Tails

function coinFlipCallback(callback) {
  setTimeout(() => {
    const random = Math.random();
    if (random < 0.5) {
      callback("Heads");
    } else {
      callback("Tails");
    }
  }, 500);
}

function coinFlipPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.5) {
        resolve("Heads");
      } else {
        reject("Tails");
      }
    }, 500);
  });
}

// const promise = coinFlipPromise();
// promise.then((result) => {
//   console.log(result);
// });
// promise.catch((result) => {
//   console.log(result);
// });

coinFlipPromise()
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });

console.log("eof");
