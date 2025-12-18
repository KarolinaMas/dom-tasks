const image = document.getElementById("preview");
const button = document.getElementById("change-img-btn");

button.addEventListener("click", handleClick);

function handleClick() {
  image.setAttribute("src", "img2.jpg");
  image.setAttribute("alt", "second image");
}
