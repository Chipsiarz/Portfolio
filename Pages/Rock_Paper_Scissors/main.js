const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const gameResult = document.getElementById("gameResult");
const choiceBtns = document.querySelectorAll(".choiceBtn");

const playerScoreSpan = document.getElementById("playerScore");
const computerScoreSpan = document.getElementById("computerScore");
const drawSpan = document.getElementById("draws");

let player;
let computer;
let playerScore = 0;
let computerScore = 0;
let draws = 0;

choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerChoice.textContent = `Player Choice: ${player}`;
    computerChoice.textContent = `Computer Choice: ${computer}`;
    gameResult.textContent = gameWinner();
  })
);

const computerTurn = () => {
  const number = Math.floor(Math.random() * 3) + 1;

  switch (number) {
    case 1:
      computer = "Rock";
      break;
    case 2:
      computer = "Paper";
      break;
    case 3:
      computer = "Scissors";
      break;
  }
};

const gameWinner = () => {
  if (player === computer) {
    draws++;
    drawSpan.textContent = draws;
    return "Draw";
  } else if (computer === "Rock") {
    if (player === "Paper") {
      playerScore++;
      playerScoreSpan.textContent = playerScore;
      return "Player Win";
    } else {
      computerScore++;
      computerScoreSpan.textContent = computerScore;
      return "Computer Win";
    }
  } else if (computer === "Paper") {
    if (player === "Scissors") {
      playerScore++;
      playerScoreSpan.textContent = playerScore;
      return "Player Win";
    } else {
      computerScore++;
      computerScoreSpan.textContent = computerScore;
      return "Computer Win";
    }
  } else if (computer === "Scissors") {
    if (player === "Rock") {
      playerScore++;
      playerScoreSpan.textContent = playerScore;
      return "Player Win";
    } else {
      computerScore++;
      computerScoreSpan.textContent = computerScore;
      return "Computer Win";
    }
  }
};
