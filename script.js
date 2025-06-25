// check connection
console.log("Connection successful!");

// computer's choice
function getComputerChoice() {
  let randomNum = Math.random();

  if (randomNum < 0.33) {
    return "rock";
  } else if (randomNum < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

// human's choice
function getHumanChoice() {
    let userinput = prompt("Choose one: Rock, Paper, or Scissors");

    if (userinput === null) {
        console.log("Prompt cancelled. Defaulting to 'rock'");
        return "rock";
    }

    return userinput.toLowerCase();
}

// play round function
function playRound(humanChoice, computerChoice) {
  console.log("You chose:", humanChoice);
  console.log("Computer chose:", computerChoice);

  const human = humanChoice.toLowerCase();
  const computer = computerChoice.toLowerCase();

  if (human === computer) {
    console.log(`It's a tie! You both chose ${human}`);
  } else if (
    (human === "rock" && computer === "scissors") ||
    (human === "paper" && computer === "rock") ||
    (human === "scissors" && computer === "paper")
  ) {
    humanScore++;
    console.log(`You win! ${human} beats ${computer}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computer} beats ${human}`);
  }

  console.log(`Score -> You: ${humanScore}, Computer: ${computerScore}`);
}

// play full game
function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    console.log(`--- Round ${i} ---`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log("--- Game Over ---");
  if (humanScore > computerScore) {
    console.log("🎉 You won the game!");
  } else if (computerScore > humanScore) {
    console.log("💻 Computer won the game!");
  } else {
    console.log("🤝 The game is a tie!");
  }
}

// global scores
let humanScore = 0;
let computerScore = 0;

// start game
playGame();
