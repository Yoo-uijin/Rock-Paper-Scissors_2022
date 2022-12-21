let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${ADD_UNICODE_TO_ROCK} for you!`);
    return DEFAULT_USER_CHOICE;
  } else {
    return selection;
  }
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

const showChoiceResult = (choice) => {
  if (choice === ROCK) {
    return ADD_UNICODE_TO_ROCK;
  } else if (choice === PAPER) {
    return ADD_UNICODE_TO_PAPER;
  } else if (choice === SCISSORS) {
    return ADD_UNICODE_TO_SCISSORS;
  }
};

startGameBtn.addEventListener("click", function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;

  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);

  displayComputerChoice.innerText = showChoiceResult(computerChoice);
  displayPlayerChoice.innerText = showChoiceResult(playerChoice);

  if (winner === RESULT_DRAW) {
    displayPlayerResult.style.visibility = "visible";
    displayPlayerResult.innerText = RESULT_DRAW;
    displayComputerResult.style.visibility = "visible";
    displayComputerResult.innerText = RESULT_DRAW;
  } else if (winner === RESULT_PLAYER_WINS) {
    displayPlayerResult.style.visibility = "visible";
    displayPlayerResult.innerText = "WIN";
    displayComputerResult.style.visibility = "hidden";
  } else if (winner === RESULT_COMPUTER_WINS) {
    displayComputerResult.style.visibility = "visible";
    displayComputerResult.innerText = "WIN";
    displayPlayerResult.style.visibility = "hidden";
  }

  gameIsRunning = false;
});
