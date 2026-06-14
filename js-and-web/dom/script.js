addEventListener("DOMContentLoaded", () => {
  const myP = document.getElementById("my-p");
  
  document.querySelector("#my-p");
  
  console.log(document.querySelector(".my-div"));
  console.log(document.querySelectorAll(".my-div"));
  
  
  document.querySelector(".my-div").innerHTML = "<p>p inside div</p>";
  document.querySelectorAll(".my-div")[1].textContent = "<p>p inside div</p>";
  
  const newP = document.createElement("p");
  newP.innerText = "inside div";
  document.querySelectorAll(".my-div")[1].appendChild(newP);
  
  // document.querySelector("#my-image").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/960px-Cat_November_2010-1a.jpg";
  document.querySelector("#my-image").setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/960px-Cat_November_2010-1a.jpg");
  
  document.querySelector("#my-image").style.width = "200px";
  
  
  document.querySelector("#my-p").classList.add("yellow");
  
  // function writeToConsole() {
  //   console.log("bla");
  // }

  // putting the function on the global scope
  window.writeToConsole = function() {
    console.log("bla");
  }
  
  // function toggleP() {
  //   document.querySelector("#my-p").classList.toggle("yellow");
  // }
  
  document.querySelector("#btnToggle").addEventListener("click", () => {
    document.querySelector("#my-p").classList.toggle("yellow");
  })
});

