let current_player = "X";
let game_board = ["", "", "", "", "", "", "", "", ""];
let game_on = true;
let meaning = document.getElementById("turn_status");
let board_spaces = document.querySelectorAll(".space");

for (let i = 1; i<=9; i++)
{
  cell_listener(i)
}

function cell_listener(i) 
{
  let cell = document.getElementById(`cell_${i}`);
  cell.addEventListener("click", () => move_player(i));
}

function move_player(i) 
{
  i -= 1;
  
  if(!game_on || game_board[i] !== "")
  {
    return;
  }

  // board_spaces.forEach(cell => cell.classList.remove("player-X","player-O"));
  
  game_board[i] = current_player;
  board_spaces[i].textContent = current_player;
  board_spaces[i].classList.add(`player-${current_player}`);

  check_win();

  if(game_on)
  {
    current_player = current_player === 'X' ? 'O' : 'X';
    meaning.textContent = `Player ${current_player}'s turn`;
  }
}

function check_win() 
{
  const winning_combos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
   
  for (let combo of winning_combos)
  {
    const [a, b, c] = combo;
    if(game_board[a] && game_board[a] === game_board[b] && game_board[a] === game_board[c])
    {
      meaning.textContent = `Player ${current_player} wins!`;
      game_on = false;
    }
  }

  if(!game_board.includes(""))
  {
    meaning.textContent = "It's a draw!";
    game_on = false;
  }
}

// function winner()
// {
//     for(let i = 0; i < 3; i++)
//     {
//         if(space[i * 3] === space[i * 3 + 1]  === space[i * 3 + 2] && space[i * 3] !== " ")
//         {
//             return true
//         } 
//     }

//     for (let i = 0; i < 3; i++) 
//     {
//         if (space[i] === space[i + 3] === space[i + 6] && space[i] !== " ") 
//         {
//             return true;
//         }
//     }

//       // Check for a diagonal win.
//     if (space[0] === space[4] === space[8] && space[0] !== " ")
//     {
//         return true;
//     }

//     if (space[2] === space[4] === space[6] && space[2] !== " ") 
//     {
//     return true;
//     }

//   return false;
// }




// function checkWinner() {
//   // Check for a row win.
//   for (var i = 0; i < 3; i++) 
        //{
//     if (cells[i * 3].innerHTML === cells[i * 3 + 1].innerHTML === cells[i * 3 + 2].innerHTML && cells[i * 3].innerHTML !== "") 
      // {
//       return true;
//     }
//   }

//   // Check for a column win.
//   for (var i = 0; i < 3; i++)
// {
//     if (cells[i].innerHTML === cells[i + 3].innerHTML === cells[i + 6].innerHTML && cells[i].innerHTML !== "") {
//       return true;
//     }
//   }

//   // Check for a diagonal win.
//   if (cells[0].innerHTML === cells[4].innerHTML === cells[8].innerHTML && cells[0].innerHTML !== "") {
//     return true;
//   }

//   if (cells[2].innerHTML === cells[4].innerHTML === cells[6].innerHTML && cells[2].innerHTML !== "") {
//     return true;
//   }

//   return false;
//}



// let surface = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
// const outcomes = [ 
//     [0, 1, 2], [3, 4, 5], [6, 7, 8],
//     [0, 3, 6], [1, 4, 7], [2, 5, 8],
//     [0, 4, 8], [2, 4, 6]
// ]

// const paper = document.getElementById("paper");
// const currentState = document.getElementById("state")

// function makeMove(cellIndex) {
//     if (gameBoard[cellIndex] === '' && !checkWinner()) 
//     {
//         gameBoard[cellIndex] = currentPlayer;
//         board.children[cellIndex].textContent = currentPlayer;
//         currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//         status.textContent = `Player ${currentPlayer}'s turn`;
//         checkWinner();
//     }
// }

// function checkWinner() {
//     for (const combination of winningCombinations) {
//         const [a, b, c] = combination;
//         if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
//             status.textContent = `Player ${gameBoard[a]} wins!`;
//             return true;
//         }
//     }
// }
