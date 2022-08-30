"use strict";

//player and computer score
let playerScore = 0;
let computerScore = 0;

//selecting all the buttons
const buttons = document.querySelectorAll("input");

//computer choosing rock, paper or scissors
function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

//when game is over the buttons will be disabled and the background changes
function disableButtons() {
  buttons.forEach((elem) => {
    elem.disabled = true;
  });
  document.body.style.backgroundColor = "red";
}

//function for playing rounds
function playRound(playerSelection) {
  let computerSelection = computerPlay();
  let result = "";

  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    playerScore += 1;
    result =
      "You win! " +
      playerSelection +
      " beats " +
      computerSelection +
      "<br><br>Player score: " +
      playerScore +
      "<br>Computer score: " +
      computerScore;

    if (playerScore == 5) {
      result += "You won the game! Reload the page to play again";
      disableButtons();
    }
  } else if (playerSelection == computerSelection) {
    result =
      "It's a tie. You both chose " +
      playerSelection +
      "<br><br>Player score: " +
      playerScore +
      "<br>Computer score: " +
      computerScore;
  } else {
    computerScore += 1;
    result =
      "You lose! " +
      computerSelection +
      " beats " +
      playerSelection +
      "<br><br>Player score: " +
      playerScore +
      "<br>Computer score: " +
      computerScore;

    if (computerScore == 5) {
      result += "I won the game! Reload the page to play again";
      disableButtons();
    }
  }

  document.getElementById("result").innerHTML = result;
  return;
}

//on every click playround function executing
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    playRound(button.value);
  });
});
