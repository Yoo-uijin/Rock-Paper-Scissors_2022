const startGameBtn = document.getElementById("start-game-btn");
const displayPlayerChoice = document.getElementById("player-choice");
const displayComputerChoice = document.getElementById("computer-choice");
const displayPlayerResult = document.getElementById("player-result");
const displayComputerResult = document.getElementById("computer-result");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;

const ADD_UNICODE_TO_ROCK = ROCK + "\u{270A}";
const ADD_UNICODE_TO_PAPER = PAPER + "\u{270B}";
const ADD_UNICODE_TO_SCISSORS = SCISSORS + "\u{270C}";

const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";
