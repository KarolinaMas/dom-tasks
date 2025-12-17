const input = document.getElementById("item-input");
const button = document.getElementById("add-item-btn");
const list = document.getElementById("items");

button.addEventListener("click", handleClick);

function handleClick() {
  input.value.trim();

  if (input.value === "") return;

  const li = document.createElement("li");

  li.textContent = input.value;

  list.appendChild(li);

  input.value = "";
}
