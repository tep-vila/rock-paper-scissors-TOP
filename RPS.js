// gawa ng function computerSelection pang generate ng sagot ng computer
// function userSelection na pang take ng sagot ng user
// variables na nag represent sa RPS
// pang process ng logic sino nanalo
// loop function playGame ng game para sa scoring and winner identifier

const generateChoice = () => (choice = Math.ceil(Math.random() * 3));

function computerSelection() {
  let choice = generateChoice();

  switch (choice) {
    case 1:
      return "rock";
      break;

    case 2:
      return "paper";
      break;

    case 3:
      return "scissors";
      break;
  }
}

const caseInsensitive_er = (choice) => choice.toLowerCase();

const answerIsValid = (choice) =>
  choice === ("rock" || "paper" || "scissors") ? true : false;

function playRound(computerSelection, playerSelection) {
  if (computerSelection === playerSelection) {
    console.log("it's a tie");
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    console.log("You lose");
  } else {
    console.log("You win");
  }
}

function mainLoop() {
  let playerChoice;
  let computerChoice;

  for (let i = 1; i <= 5; i++) {
    playerChoice = caseInsensitive_er(prompt("rock, paper, or scissors?"));
    computerChoice = computerSelection();

    if (answerIsValid(playerChoice)) {
      playRound(computerChoice, playerChoice);
    } else {
      console.log("invalid answer");
      console.log(i);
      i -= 1;
    }
  }
}
