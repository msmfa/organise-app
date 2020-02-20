export { submitButtonclick, getInputData, strikeThrough };

const form = document.querySelector("form");
const submitButton = document.getElementById("submit");
const content = document.getElementById("content");

function submitButtonclick() {
  submitButton.addEventListener("click", getInputData);
}

function getInputData() {
  displayNewtodos(form[0].value);
}

function displayNewtodos(todoText) {
  const title = document.createElement("P");
  content.appendChild(title);
  title.textContent = todoText;
  title.className = "title-text";
  strikeThrough(title);
}

function strikeThrough(title) {
  title.addEventListener("click", function() {
    if (title.style.textDecoration === "none") {
      title.style.textDecoration = "line-through";
    } else {
      title.style.textDecoration = "none";
    }
  });
}
