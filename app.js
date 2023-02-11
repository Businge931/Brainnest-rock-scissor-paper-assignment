const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const resultText_p = document.getElementById("result-text");
const roundResult_p = document.getElementById("round-result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissor");
const reset_button = document.querySelector(".action_button");

let userScore = 0;
let computerScore = 0;

function computerPlay() {
  let choice = ["rock", "paper", "scissor"];
  let computerChoice = Math.floor(Math.random() * 3);
  return choice[computerChoice];
}

rock_div.addEventListener("click", () => {
  let result = startGame("rock");
  result_text();
  resultStyle(result, rock_div);
});
paper_div.addEventListener("click", () => {
  let result = startGame("paper");
  result_text();
  resultStyle(result, paper_div);
});
scissors_div.addEventListener("click", () => {
  let result = startGame("scissor");
  result_text();
  resultStyle(result, scissors_div);
});

function startGame(userChoice) {
  let compChoice = computerPlay();

  if (userChoice === compChoice) {
    resultText_p.textContent = "It's a draw!!";
    return "draw";
  } else if (
    (userChoice === "rock" && compChoice === "scissor") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissor" && compChoice === "paper")
  ) {
    userScore++;
    userScore_span.textContent = userScore;
    resultText_p.textContent = `Computer tried to block your ${userChoice} with ${compChoice} and failed... You Won 🔥🔥`;
    console.log("You guessed right and won!!!");
    return "win";
  } else if (
    (userChoice === "rock" && compChoice === "paper") ||
    (userChoice === "paper" && compChoice === "scissor") ||
    (userChoice === "scissor" && compChoice === "rock")
  ) {
    computerScore++;
    computerScore_span.textContent = computerScore;
    resultText_p.textContent = `Computer blocked your ${userChoice} with ${compChoice} successfully... You Lost 😭😭`;
    console.log("You guessed wrong and lost!!!");
    return "loss";
  }
}

function result_text() {
  if (userScore === 5) {
    roundResult_p.textContent = "You won this round";
    userScore = 0;
    computerScore = 0;
    userScore_span.textContent = 0;
    computerScore_span.textContent = 0;
    resultText_p.textContent = `To begin choose one from rock, paper or scissor`;
    console.log("You won this round");
  } else if (computerScore === 5) {
    roundResult_p.textContent = "You lost this round";
    userScore = 0;
    computerScore = 0;
    userScore_span.textContent = 0;
    computerScore_span.textContent = 0;
    resultText_p.textContent = `To begin choose one from rock, paper or scissor`;
    console.log("You lost this round");
  }

  setTimeout(() => {
    roundResult_p.textContent = "";
  }, 10000);
}

function resultStyle(result, e) {
  if (result === "win") {
    e.classList.add("win");
    setTimeout(() => {
      e.classList.remove("win");
    }, 1000);
  } else if (result === "draw") {
    e.classList.add("draw");
    setTimeout(() => {
      e.classList.remove("draw");
    }, 1000);
  } else {
    e.classList.add("lost");
    setTimeout(() => {
      e.classList.remove("lost");
    }, 1000);
  }
}

reset_button.addEventListener("click", () => {
  userScore_span.textContent = 0;
  computerScore_span.textContent = 0;
  resultText_p.textContent = `To begin choose one from rock, paper or scissor`;
});
