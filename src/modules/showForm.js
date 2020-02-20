export { buttonClick };

const button = document.querySelector(".button");
const addtodo = document.getElementById("add-todo");
const addButton = document.querySelector(".add-button");
const form = document.querySelector("form");

function buttonClick() {
  addButton.addEventListener("click", showAndhideForm);
}

function showAndhideForm() {
  if (button.style.display === "none") {
    form.style.display = "block";
    button.style.display = "block";
    addtodo.textContent = "Minimise";
  } else {
    button.style.display = "none";
    form.style.display = "none";
    addtodo.textContent = "Add a new To-do";
  }
}
