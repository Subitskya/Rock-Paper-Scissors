let totalScore = {
  computerScore: 0,
  playerScore: 0,
};

function getComputerChoice() {
  let rpsChoices = ["Rock", "Paper", "Scissors"];
  let randomNumber = Math.floor(Math.random() * 3);
  return rpsChoices[randomNumber];
}

// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {

  let score;

  // All situations where human draws, set `score` to 0
  if (playerChoice === computerChoice) {
    score = 0;
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    score = 1
  } else if (playerChoice === "Scissor" && computerChoice === "Paper") {
    score = 1
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    score = 1
  }
  else {
    score = -1
  }

  return score
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  const resultDiv = document.getElementById("result");
  const handsDiv = document.getElementById("hands");
  const playerScoreDiv = document.getElementById("player-score");

  if (score == -1) {
    resultDiv.innerText = "You Lose!"
  } else if (score == 0) {
    resultDiv.innerText = "It's a tie!"
  } else {
    resultDiv.innerText = "You Won!"
  }

  handsDiv.innerText = `👨${playerChoice} vs 🤖${computerChoice}`
  playerScoreDiv.innerText = `Your Score: ${totalScore['playerScore']}`
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  console.log({ playerChoice });
  let computerChoice = getComputerChoice();
  console.log({ computerChoice });
  let score = getResult(playerChoice, computerChoice);
  totalScore["playerScore"] += score;
  console.log({ score });
  console.log(totalScore);
  showResult(score, playerChoice, computerChoice);
}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  let rpsButtons = document.querySelectorAll(".rpsButton");
  rpsButtons[0].onclick = () => console.log(rpsButtons[0].value);

  rpsButtons.forEach((rpsButton) => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value);
  })

  const endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame(totalScore)
}

// ** endGame function clears all the text on the DOM **
function endGame() {
    totalScore['playerScore'] = 0
    totalScore['computerScore'] = 0

    const resultDiv = document.getElementById("result");
    const handsDiv = document.getElementById("hands");
    const playerScoreDiv = document.getElementById("player-score");

    resultDiv.innerText = ''
    handsDiv.innerText = ''
    playerScoreDiv.innerText = ''
}

playGame();
