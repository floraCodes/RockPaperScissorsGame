//We need to cache the DOM: this means storing something for future use.
//It's good for readability, and mostly so we dont have to run the process to get the reference to that element
let userScore = 0;
let computerScore = 0;

const $userScore = document.querySelector("#user-score");
const $computerScore = document.querySelector("#computer-score");
const $scoreBoard = document.querySelector(".score-board");
const $result = document.querySelector(".result > p");
const $rock = document.querySelector("#r");
const $paper = document.querySelector("#p");
const $scissors = document.querySelector("#s");

//adding the event listeners
function main() {
  $rock.addEventListener("click", () => game("r"));

  $paper.addEventListener("click", () => game("p"));

  $scissors.addEventListener("click", () => game("s"));
}
main();

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    //first, all situations where the user wins
    case "rs":
    case "pr":
    case "sp":
      userWins(userChoice, computerChoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      userLooses(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw();
      break;
  }
}
function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}
function userWins(userChoice, computerChoice) {
  userScore++;
  $userScore.innerHTML = userScore;
  $computerScore.innerHTML = computerScore;
  const smallUserWord = "(user)".fontsize(3).sub();
  const smallCompWord = "(comp)".fontsize(3).sub();
  //prettier-ignore
  $result.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`;
  const $userBorder = document.getElementById(userChoice);
  $userBorder.classList.add("green-glow");
  setTimeout(() => $userBorder.classList.remove("green-glow"), 1000);
}

function userLooses(userChoice, computerChoice) {
  computerScore++;
  $userScore.innerHTML = userScore;
  $computerScore.innerText = computerScore;
  const smallUserWord = "(user)".fontsize(3).sub();
  const smallCompWord = "(comp)".fontsize(3).sub();
  //prettier-ignore
  $result.innerHTML = `${convertToWord(computerChoice)}${smallCompWord} beats ${convertToWord(userChoice)}${smallUserWord}. Computer wins!`;
  const $userBorder = document.getElementById(userChoice);
  $userBorder.classList.add("red-glow");
  setTimeout(() => $userBorder.classList.remove("red-glow"), 1000);
}

function draw() {
  $result.innerHTML = "It's a Draw!";
}
