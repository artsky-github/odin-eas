const easContainer = document.querySelector(".eas-container");

function getSquareDimension(gridContainer, squares) {
  return gridContainer.clientWidth / squares - 2;
}

function createSquare(squares) {
  const lenWidth = getSquareDimension(easContainer, squares);
  const square = document.createElement("div");
  square.setAttribute(
    "style",
    `border: solid black 1px; min-width: ${lenWidth}px; height: ${lenWidth}px;`
  );
  square.addEventListener("mousedown", () => {
    square.style.backgroundColor = "red";
  });
  return square;
}

function createGrid(squares) {
  for (let i = 0; i < Math.pow(squares, 2); i++) {
    easContainer.appendChild(createSquare(squares));
  }
}

createGrid(10);
