import { promptButton } from "./button.js";

export const gridContainer = createGridContainer();
export function createGrid(gridContainer, squares) {
  for (let i = 0; i < squares; i++) {
    const lastSquare = createSquare(gridContainer, squares);
    lastSquare.style.minWidth = `${getLastSquareSize(
      gridContainer,
      squares
    )}px`;
    console.log(lastSquare.clientWidth);
    gridContainer.appendChild(lastSquare);
    for (let j = 0; j < squares - 1; j++) {
      gridContainer.appendChild(createSquare(gridContainer, squares));
    }
  }
  console.log(gridContainer);
}

export function resetGrid(gridContainer) {
  gridContainer.innerHTML = "";
}

let isMouseDown = false;

function getLastSquareSize(gridContainer, squares) {
  const unrefinedDimension = getSquareDimension(gridContainer, squares);
  return gridContainer.clientWidth - unrefinedDimension * (squares - 1);
}

function dragToColor(gridContainer) {
  gridContainer.addEventListener("mousedown", () => {
    isMouseDown = true;
  });
  gridContainer.addEventListener("mouseup", () => {
    isMouseDown = false;
  });
  gridContainer.addEventListener("mousedown", (e) => {
    changeColor(e, gridContainer);
  });
  gridContainer.addEventListener("mouseover", (e) => {
    changeColor(e, gridContainer);
  });
}

function getSquareDimension(gridContainer, squares) {
  return Math.round((gridContainer.clientWidth / squares) * 10) / 10;
}

function createGridContainer() {
  const gridContainer = document.createElement("div");
  const footerElement = document.getElementsByTagName("footer")[0];
  gridContainer.setAttribute("class", "eas-container");
  document.body.insertBefore(gridContainer, footerElement);
  dragToColor(gridContainer);
  createGrid(gridContainer, 10);
  return gridContainer;
}
function createSquare(gridContainer, squares) {
  const lenWidth = getSquareDimension(gridContainer, squares);
  const square = document.createElement("div");
  square.setAttribute("class", "eas-square");
  square.style.minWidth = `${lenWidth}px`;
  square.style.maxHeight = `${lenWidth}px`;
  console.log(square);
  return square;
}
function changeColor(e, gridContainer) {
  if (e.type === "mouseover" && !isMouseDown) return;
  if (e.target !== gridContainer) {
    let rgbRandom = colorRandomizer();
    e.target.style.backgroundColor = rgbRandom;
    e.target.style.borderColor = rgbRandom;
  }
}
function colorRandomizer() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
