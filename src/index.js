import getJoke from "./getJoke";
import "./styles/main.scss";
import logo from "./assets/logo.png";

// Our .js filename should match to "main" : file_name under package.json to use webpack.
const openbtn = document.querySelector(".open-btn");
const closebtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal-container");
const jokeText = document.querySelector(".modal-text");

openbtn.addEventListener("click", () => {
  modal.classList.toggle("show");
  jokeText.textContent = getJoke();
});

closebtn.addEventListener("click", () => {
  modal.classList.remove("show");
});
