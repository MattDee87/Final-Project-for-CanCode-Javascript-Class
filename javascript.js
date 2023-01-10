(() => {


  // this will set the current player to "X"
  let currentPlayer = "X";
  
  // this is an array of winning combinations
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
  
  // Array of cell elements
  const cells = [
    document.querySelector("#cell-1"),
    document.querySelector("#cell-2"),
    document.querySelector("#cell-3"),
    document.querySelector("#cell-4"),
    document.querySelector("#cell-5"),
    document.querySelector("#cell-6"),
    document.querySelector("#cell-7"),
    document.querySelector("#cell-8"),
    document.querySelector("#cell-9"),
  ];
  
  // Add a click event to the start button
  document.querySelector("#start-button").addEventListener("click", startGame);
  
  // Add a click event to the reset button
  document.querySelector("#reset-button").addEventListener("click", resetGame);


  
  //Starting the game
  
  // When a cell on the board is clieked this function will start using .textContent
  function play() {
    if (this.textContent) {
      return;
    }
  
    // Mark the cell with the current player's X or O
    this.textContent = currentPlayer;
  
  
  
  
  
    // Checks for a win
    const winner = checkForWin();
  
    // If there is a win, show an alert and reset the game
    if (winner) {
      //alert.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
      alert("Player " + winner + " wins! Pizza and Cookies for you!!");
      resetGame();
      return;
    }
  
    // Checks for a draw
    if (checkForDraw()) {
      // If there is a draw, show an alert and reset the game
      alert("Draw!  To bad...no pizza for anyone...");
      resetGame();
      return;
    }
  
    // Switches to the other player
    if (currentPlayer === "X") {
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }

    

  }
  

  
  // This will Ccheck for a win by checking all possible combinations of the cells on the board
  
  
  
  function checkForWin() {
    // This gets the values of the cells in each combination using .map
    const values = winningCombinations.map(function (combination) {
      const [cell1, cell2, cell3] = combination.map(function (index) {
        return cells[index - 1].innerHTML;
      });
      return [cell1, cell2, cell3];
    });
  
    // Checks each combination for a win and if the player has marked 3 cells in a row return X or O
    for (let i = 0; i < values.length; i++) {
      const [cell1, cell2, cell3] = values[i];
      if (cell1 === currentPlayer && cell2 === currentPlayer && cell3 === currentPlayer) {
        return currentPlayer;
      }
    }
  
    // If there are no combinations it will return null
    return null;
  }
  
  //Looks for a draw by seeing if there are any empty cells
  function checkForDraw() {
    for (let i = 0; i < cells.length; i++) {
      if (!cells[i].textContent) {
        return false;
      }
    }
  
    // If there are no empty cells, return true
    return true;
  }
  
  // Reset the game by clearing all the cells and setting the current player to "X"
  function resetGame() {
    cells.forEach(function (cell) {
      cell.textContent = "";
    });
  
    currentPlayer = "X";
  }
  
  // This function is the start button when clicked
  function startGame() {
    // Add a click event to each cell
    for (let i = 0; i < cells.length; i++) {
      cells[i].addEventListener("click", play);
    }
  
    // Hide the start button
    document.querySelector("#start-button").style.display = "none";
  }


  
})();