function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

alert("Welcome! to Rock,Paper and Scissors game. Click ok to continue");

function checkUserInput(userInput) {
  while (
    userInput !== "rock" &&
    userInput !== "paper" &&
    userInput !== "scissors"
  ) {
    alert(
      'You can only enter : "rock", "paper", or "scissors"! Input cannot also be empty'
    );
    userInput = prompt("Enter 'rock', 'paper', or 'scissors':").toLowerCase();
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerPlay();
  checkUserInput(playerSelection);

  if (playerSelection === computerSelection) {
    return `It's a tie! You both chose ${playerSelection} ! `;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let computerSelection = computerPlay();

  for (let i = 0; i < 5; i++) {
    let gameResult = playRound(
      prompt("choose one of these: rock, paper or scissors"),
      computerSelection
    );
    console.log(`Round ${i + 1}: ${gameResult}`);

    if (gameResult.includes("Win")) {
      playerScore++;
    } else if (gameResult.includes("Lose")) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log(
      `You win the game! Your score: ${playerScore}---Computer score: ${computerScore}`
    );
  } else if (playerScore == computerScore) {
    console.log(
      `It is a drawn: Your score: ${playerScore}---Computer score: ${computerScore}`
    );
  } else {
    console.log(
      `You lost the game! Your score: ${playerScore}---Computer score: ${computerScore}`
    );
  }
}

game();
