addEventListener("DOMContentLoaded", () => {
  document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
  });

  document.getElementById("child").addEventListener("click", (e) => {
    console.log("Child clicked");
    e.stopPropagation();
  });
});
