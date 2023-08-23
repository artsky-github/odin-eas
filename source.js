const gridContainer = createGridContainer();
let isMouseDown = false;

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
  return gridContainer.clientWidth / squares - 2;
}

function createGridContainer() {
  const gridContainer = document.createElement("div");
  gridContainer.setAttribute("class", "eas-container");
  dragToColor(gridContainer);
  document.body.appendChild(gridContainer);
  return gridContainer;
}

function createSquare(squares) {
  const lenWidth = getSquareDimension(gridContainer, squares);
  const square = document.createElement("div");
  square.setAttribute("class", "eas-square");
  square.style.minWidth = `${lenWidth}px`;
  square.style.maxHeight = `${lenWidth}px`;
  return square;
}

function createGrid(squares) {
  for (let i = 0; i < Math.pow(squares, 2); i++) {
    gridContainer.appendChild(createSquare(squares));
  }
}

function changeColor(e, gridContainer) {
  if (e.type === "mouseover" && !isMouseDown) return;
  if (e.target !== gridContainer) {
    e.target.style.backgroundColor = "black";
    e.target.style.borderColor = "black";
  }
}

createGrid(20);
