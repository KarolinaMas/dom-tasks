const contentDiv = document.getElementById("page");
const button = document.getElementById("toggle-theme-btn");

button.addEventListener("click", toggleClass);

function toggleClass() {
  contentDiv.classList.toggle("dark");
}
