const inputValue = document.querySelector("form");
const input = inputValue.todoId;

inputValue.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(input.value);
});
