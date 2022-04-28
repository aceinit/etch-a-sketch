const reset = document.querySelector(".reset");

reset.addEventListener("click", resetAsk);

const grid = document.querySelector(".grid-cont");
const squares = document.createElement("div");

function resetAsk() {
  prompt("How many boxes would you like to add?");
}

function createOrigin() {
  for (let i = 0; i <= 256; i++) {
    grid.appendChild(squares.cloneNode());
    squares.classList.add("squares");  
  }
}

createOrigin();








