const listItems = document.querySelectorAll("#todo-list li");

const button = document.getElementById("highlight-btn");

button.addEventListener("click", changeColor);

function changeColor() {
  listItems.forEach((item) => (item.style.color = "red"));
}
