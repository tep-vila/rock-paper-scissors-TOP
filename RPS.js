const winLoseMsg = document.querySelector(".win-lose-msg");
const playerScore = document.querySelector(".curr-player-score");
const compScore = document.querySelector(".curr-comp-score");
const compChoiceDisplay = document.querySelector(".comp-choice-img");
const playerChoiceLbl = document.querySelector(".player-choice");
const compChoiceLbl = document.querySelector(".comp-choice");
const optionRow = document.querySelectorAll(".choose-option div");
const choiceDisplay = document.querySelector(".choice-display");
const resetChoice =
  '<span class="player-choice">YOU</span> VS <span class="comp-choice">COMP</span>';

const defaultScore = "00";

optionRow.forEach((choices) => {
  choices.addEventListener("click", (event) => {
    let choice = event.currentTarget.className;
    choice.toString();
    playRound(computerSelection(), choice);
  });
});

function computerSelection() {
  let choice = () => {
    return (choice = Math.ceil(Math.random() * 3));
  };

  choice();

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

function playRound(computerSelection, playerSelection) {
  if (computerSelection === playerSelection) {
    console.log("it's a tie");
    tie(computerSelection);
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    console.log("You lose");
    lose(computerSelection);
  } else {
    console.log("You win");
    win(computerSelection);
  }
}

function tie(computerSelection) {
  choiceDisplay.innerHTML = "Tie!";
  updateCompImg(computerSelection);
  setTimeout(() => (choiceDisplay.innerHTML = resetChoice), 2000);
}

function updateCompImg(compChoice) {
  compChoiceDisplay.src = `assets/${compChoice}.png`;
  console.log(compChoiceDisplay);
}

function lose(computerSelection) {
  choiceDisplay.innerHTML = "Round lost!";
  updateCompImg(computerSelection);
  setTimeout(() => (choiceDisplay.innerHTML = resetChoice), 2000);
}

function win(computerSelection) {
  choiceDisplay.innerHTML = "Round won!";
  updateCompImg(computerSelection);
  setTimeout(() => (choiceDisplay.innerHTML = resetChoice), 2000);
}
