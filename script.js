let playerScore = 0;
let computerScore = 0;

const playerScoreSpan = document.getElementById("playerScore");
const computerScoreSpan = document.getElementById("computerScore");
const resultDisplay = document.getElementById("resultDisplay");
const finalResultDisplay = document.getElementById("finalResult");
const playAgainBtn = document.getElementById("playAgainBtn");

function playRound(playerSelection) {
  const choices = ['rock', 'paper', 'scissors'];
  const emojis = {
    rock: "🥌",
    paper: "📃",
    scissors: "✂️"
  };

  const computerSelection = choices[Math.floor(Math.random() * choices.length)];

  if (playerSelection === computerSelection) {
    resultDisplay.textContent = `🤝 It's a tie! You both chose ${emojis[playerSelection]} (${playerSelection}).`;
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    resultDisplay.textContent = `✅ You win! ${emojis[playerSelection]} beats ${emojis[computerSelection]}.`;
  } else {
    computerScore++;
    resultDisplay.textContent = `❌ You lose! ${emojis[computerSelection]} beats ${emojis[playerSelection]}.`;
  }

  updateScores();
  checkWinner();
}

function updateScores() {
  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;
}

function checkWinner() {
  if (playerScore === 5 || computerScore === 5) {
    disableButtons();

    setTimeout(() => {
      finalResultDisplay.textContent =
        playerScore === 5
          ? "🏆 Congratulations! You won the game!"
          : "💻 The computer wins! Better luck next time.";
      playAgainBtn.style.display = "flex";
      playAgainBtn.style.justifyContent = "center";
    }, 1000); // Delay for dramatic effect
  }
}

function disableButtons() {
  document.querySelectorAll(".choice").forEach((button) => {
    button.disabled = true;
  });
}

function enableButtons() {
  document.querySelectorAll(".choice").forEach((button) => {
    button.disabled = false;
  });
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  updateScores();
  resultDisplay.textContent = "";
  finalResultDisplay.textContent = "";
  playAgainBtn.style.display = "none";
  enableButtons();
}

// Event listeners
document.querySelectorAll(".choice").forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.getAttribute("data-choice");
    playRound(playerChoice);
  });
});

playAgainBtn.addEventListener("click", resetGame);
