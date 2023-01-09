// Find all the cells and the reset button
const cells = document.querySelectorAll("td");
const resetButton = document.querySelector("#reset-button");

// Set the current player to "X"
let currentPlayer = "X";

// Add a click event to each cell
for (const cell of cells) {
  cell.addEventListener("click", handleClick);
}

// Add a click event to the reset button
resetButton.addEventListener("click", resetGame);

// This function is called when a cell is clicked
function handleClick() {
  // Return if the cell has already been clicked
  if (this.textContent) {
    return;
  }

  // Mark the cell with the current player's symbol
  this.textContent = currentPlayer;

  // Check for a win
  const winner = checkForWin();

  // If there is a win, show an alert and reset the game
  if (winner) {
    alert(`Player ${winner} wins!`);
    resetGame();
    return;
  }

  // Check for a draw
  if (checkForDraw()) {
    // If there is a draw, show an alert and reset the game
    alert("Draw!");
    resetGame();
    return;
  }

  // Switch to the other player
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

// Check for a win by checking all possible combinations of three cells
function checkForWin() {
  const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  // Check each combination of cells to see if they have the same symbol as the current player
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      cells[a - 1].textContent === currentPlayer &&
      cells[b - 1].textContent === currentPlayer &&
      cells[c - 1].textContent === currentPlayer
    ) {
      return currentPlayer;
    }
  }

  // If no combination of cells has the same symbol as the current player, return null
  return null;
}

// Check for a draw by seeing if there are any empty cells
function checkForDraw() {
  for (const cell of cells) {
    if (!cell.textContent) {
      return false;
    }
  }

  // If there are no empty cells, return true
  return true;
}

// Reset the game by clearing all the cells and setting the current player to "X"
function resetGame() {
  for (const cell of cells) {
    cell.textContent = "";
  }

  currentPlayer = "X";
}








