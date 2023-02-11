function computerPlay() {
  let choices = ["Rock", "Paper", "Scissors"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
function playRound(playerSelection, computerSelection) {
  //   playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return (
      "You win! " +
      playerSelection.charAt(0).toUpperCase() +
      playerSelection.slice(1) +
      " beats " +
      computerSelection.charAt(0).toUpperCase() +
      computerSelection.slice(1) +
      "."
    );
  } else {
    return (
      "You lose! " +
      computerSelection.charAt(0).toUpperCase() +
      computerSelection.slice(1) +
      " beats " +
      playerSelection.charAt(0).toUpperCase() +
      playerSelection.slice(1) +
      "."
    );
  }
}
function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(
      "What will you choose? Rock, paper, or scissors?"
    );
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result.startsWith("You win")) {
      playerScore++;
    } else if (result.startsWith("You lose")) {
      computerScore++;
    }
  }
  if (playerScore > computerScore) {
    console.log(
      "You win the game! Score: " + playerScore + "-" + computerScore
    );
  } else if (playerScore < computerScore) {
    console.log(
      "You lose the game! Score: " + playerScore + "-" + computerScore
    );
  } else {
    console.log("It's a tie! Score: " + playerScore + "-" + computerScore);
  }
}

game();
