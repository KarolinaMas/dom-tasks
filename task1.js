const mainHeader = document.getElementById("main-title");

const button = document.getElementById("change-title-btn");

button.addEventListener("click", handleClick);

function handleClick() {
  mainHeader.innerText = "New amazing title";
}
