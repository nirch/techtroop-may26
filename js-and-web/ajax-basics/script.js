addEventListener("DOMContentLoaded", () => {
  randomImage();

  function randomImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const randomImgURL = data.message;
        document.querySelector("#imgDog").src = randomImgURL;
      });
  }

  function randomImageAxios() {
    axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
      console.log(response);
      const randomImgURL = response.data.message;
      document.querySelector("#imgDog").src = randomImgURL;
    });

    // fetch("https://dog.ceo/api/breeds/image/random")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     const randomImgURL = data.message;
    //     document.querySelector("#imgDog").src = randomImgURL;
    //   });
  }

  document
    .querySelector("#btnRandomImg")
    .addEventListener("click", randomImageAxios);
});
