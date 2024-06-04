import { handleAsyncData } from "./dom/apiResults.js";
//  pull from the dom
const inputValue = document.querySelector("form");
const input = inputValue.todoId;
const result = document.querySelector("#result");

inputValue.addEventListener("submit", (e) => {
  e.preventDefault();

  try {
    //   puts api data from api in dom
    handleAsyncData(input);
  } catch (error) {
    result.innerHTML = `
    <h1> ${error}</h1>
                          
`;
  }
});
