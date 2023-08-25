import { createGrid, resetGrid, gridContainer } from "./grid.js";

export const promptButton = createPromptButton();

function createPromptButton() {
  const promptButton = document.createElement("button");
  const headerElement = document.getElementsByTagName("h1")[0];
  promptButton.innerHTML = "New Grid";
  promptButton.setAttribute("class", "prompt-button");
  promptButton.addEventListener("click", () => {
    let userInput = requestUserNumb();
    resetGrid(gridContainer);
    createGrid(gridContainer, userInput);
  });
  headerElement.after(promptButton);
  return promptButton;
}

function requestUserNumb() {
  let userInput = prompt("Squares Per Side:");
  while (userInput > 64 || userInput <= 0) {
    userInput = prompt("Reached Limit! Try Again:");
  }
  return userInput;
}
