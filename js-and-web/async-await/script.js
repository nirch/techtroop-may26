

// function getNumberOfBreeds() {
//   return new Promise((resolve, reject) => {
//     axios.get("https://dog.ceo/api/breeds/list/all")
//       .then(response => {
//         console.log(response);
//         // process data (calculating the number of breeds)
//         const numOfBreeds = Object.keys(response.data.message).length;
//         resolve(numOfBreeds);
//       }).catch(err => reject(err))
//   })
// }


async function getNumberOfBreeds() {
  const response = await axios.get("https://dog.ceo/api/breeds/list/all");
  const numOfBreeds = Object.keys(response.data.message).length;
  return numOfBreeds;
}


const x = getNumberOfBreeds();
console.log(x);


getNumberOfBreeds().then(numOfBreeds => console.log(numOfBreeds));




async function doSomething() {
  return 10;
}

function doSomething() {
  return new Promise((resolve, reject) => {
    resolve(10);
  })
}