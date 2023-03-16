// const cells = document.querySelectorAll(".cell");
// const statusText = document.querySelector(".statusText");
// const restartBtn = document.querySelector(".restartBtn");
// const winConditions = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
// ];
// let options = ["", "", "", "", "", "", "", "", ""];
// let currentPlayer = "X";
// let running = false;

// initializeGame();

// function initializeGame() {
//   cells.forEach((cell) =>
//     cell.addEventListener("click", cellClicked)
//   );
//   restartBtn.addEventListener("click", restartGame);
//   statusText.textContent = `${currentPlayer}'s turn`;
//   running = true;
// }

// function cellClicked() {
//   const cellIndex = this.getAttribute("cellIndex");

//   if (options[cellIndex] != "" || !running) {
//     return;
//   }
//   updateCell(this, cellIndex);
//   checkWinner();
// }
// function updateCell(cell, index) {
//   options[index] = currentPlayer;
//   cell.textContent = currentPlayer;
// }
// function changePlayer() {
//   currentPlayer = currentPlayer == "X" ? "O" : "X";
//   statusText.textContent = `${currentPlayer}'s turn`;
// }

// function checkWinner() {
//   let roundWon = false;
//   for (let i = 0; i < winConditions.length; i++) {
//     const condition = winConditions[i];
//     const cellA = options[condition[0]];
//     const cellB = options[condition[1]];
//     const cellC = options[condition[2]];

//     if (cellA == "" || cellB == "" || cellC == "") {
//       continue;
//     }
//     if (cellA == cellB && cellB == cellC) {
//       roundWon = true;
//       break;
//     }
//   }
//   if (roundWon) {
//     statusText.textContent = `${currentPlayer} wins!`;
//     running = false;
//   } else if (!options.includes("")) {
//     statusText.textContent = `Draw!`;
//     running = false;
//   } else {
//     changePlayer();
//   }
// }

// function restartGame() {
//   currentPlayer = "X";
//   let options = ["", "", "", "", "", "", "", "", ""];
//   statusText.textContent = `${currentPlayer}'s turn`;
//   cells.forEach((cell) => (cell.textContent = ""));
//   running = true;
// }

class TicTacToe {
  constructor() {
    this.cells = document.querySelectorAll(".cell");
    this.statusText = document.querySelector(".statusText");
    this.restartBtn = document.querySelector(".restartBtn");
    this.winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    this.options = ["", "", "", "", "", "", "", "", ""];
    this.currentPlayer = "X";
    this.running = false;
    this.initializeGame();
  }

  initializeGame() {
    this.cells.forEach((cell) =>
      cell.addEventListener("click", () => this.cellClicked(cell))
    );
    this.restartBtn.addEventListener("click", () =>
      this.restartGame()
    );
    this.statusText.textContent = `${this.currentPlayer}'s turn`;
    this.running = true;
  }

  cellClicked(cell) {
    const cellIndex = cell.getAttribute("cellIndex");
    if (this.options[cellIndex] !== "" || !this.running) {
      return;
    }
    this.updateCell(cell, cellIndex);
    this.checkWinner();
  }

  updateCell(cell, index) {
    this.options[index] = this.currentPlayer;
    cell.textContent = this.currentPlayer;
  }

  changePlayer() {
    this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
    this.statusText.textContent = `${this.currentPlayer}'s turn`;
  }

  checkWinner() {
    let roundWon = false;
    for (let i = 0; i < this.winConditions.length; i++) {
      const condition = this.winConditions[i];
      const cellA = this.options[condition[0]];
      const cellB = this.options[condition[1]];
      const cellC = this.options[condition[2]];
      if (cellA === "" || cellB === "" || cellC === "") {
        continue;
      }
      if (cellA === cellB && cellB === cellC) {
        roundWon = true;
        break;
      }
    }
    if (roundWon) {
      this.statusText.textContent = `${this.currentPlayer} wins!`;
      this.running = false;
    } else if (!this.options.includes("")) {
      this.statusText.textContent = "Draw!";
      this.running = false;
    } else {
      this.changePlayer();
    }
  }

  restartGame() {
    this.currentPlayer = "X";
    this.options = ["", "", "", "", "", "", "", "", ""];
    this.statusText.textContent = `${this.currentPlayer}'s turn`;
    this.cells.forEach((cell) => (cell.textContent = ""));
    this.running = true;
  }
}

// create a new instance of the TicTacToe class
const game = new TicTacToe();
