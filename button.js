import { createGrid, resetGrid, gridContainer } from "./grid.js";

export const promptButton = createPromptButton();

function createPromptButton() {
  const promptButton = document.createElement("button");
  const headerElement = document.getElementsByTagName("h1")[0];
  promptButton.innerHTML = "New Grid";
  promptButton.setAttribute("class", "prompt-button");
  promptButton.addEventListener("click", () => {
    let userInput = requestUserNumb();
    if (userInput === null) {
      // does nothing to ignore unnecessary method execution.
    } else {
      resetGrid(gridContainer);
      createGrid(gridContainer, userInput);
    }
  });
  headerElement.after(promptButton);
  return promptButton;
}

function requestUserNumb() {
  let userInput = prompt("Squares Per Side:");
  if (userInput === null) {
    return null;
  }
  while (userInput > 64 || userInput <= 0) {
    if (userInput <= 0) {
      userInput = prompt("Grid cannot be 0 or less! Try Again:");
    } else {
      userInput = prompt("Grid cannot be greater than 64! Try Again:");
    }
  }
  return userInput;
}
