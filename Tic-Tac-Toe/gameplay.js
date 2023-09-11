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
   
  let win_found =false;
  
  for (let combo of winning_combos)
  {
    const [a, b, c] = combo;
    if(game_board[a] && game_board[a] === game_board[b] && game_board[a] === game_board[c])
    {
      meaning.textContent = `Player ${current_player} wins!`;
      game_on = false;
      win_found = true;
      break;
    }
  }

  if(!win_found && !game_board.includes(""))
  {
    meaning.textContent = "It's a draw!";
    game_on = false;
  }
}

const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", reset_board);

function reset_board() 
{
  game_board = ["", "", "", "", "", "", "", "", ""];
  game_on = true;
  current_player = "X";
  clear_board();
  meaning.textContent = `Player ${current_player}'s turn`;
}

function clear_board()
{
  board_spaces.forEach((cell) => {
    cell.textContent = ""; 
    cell.classList.remove("player-X", "player-O");
  });
}