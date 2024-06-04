import { tableBuilder } from "./dom/apiCreateTable.js";
const tbody = document.querySelector("#tbody");
const th = document.querySelector("#header");

try {
  // builds table and inerts into dom
  tableBuilder(th, tbody);
} catch (error) {
  // displays error
  const displayError = document.querySelector("#error");
  displayError.innerText = error;
}
