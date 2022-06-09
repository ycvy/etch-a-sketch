let userRows = 0;
const btn = document.getElementById("btn");
btn.addEventListener("click", function(e) {
  document
    .querySelectorAll(".grid-item")
    .forEach((e) => e.parentNode.removeChild(e));

  canvasSize = prompt("How many rows?");
  while (canvasSize > 100) {
    canvasSize = prompt("How many rows?");
  }
  makeRows(canvasSize);
})

const container = document.getElementById("container");

function makeRows(_canvasSize) {
  const rows = canvasSize;
  const cols = canvasSize;
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener("mouseover", function(e) {
      e.target.style.backgroundColor = "white";
      setTimeout(function() {
        e.target.style.backgroundColor = "";
      }, 300);
    }, false);
  };
};


