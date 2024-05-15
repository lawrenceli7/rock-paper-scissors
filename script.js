let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    humanChoice = humanChoice.toLowerCase();
    let result = "";

    if (humanChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        result = `You win! ${humanChoice} beats ${computerChoice}!`;
        humanScore++;
    } else {
        result = `You lose! ${computerChoice} beats ${humanChoice}!`;
        computerScore++;
    }

    document.getElementById("results").textContent = result;
    document.getElementById("score").textContent = `Human: ${humanScore} - Computer: ${computerScore}`;

    if (humanScore === 5) {
        document.getElementById("results").textContent = "You won the game!";
        resetGame();
    } else if (computerScore === 5) {
        document.getElementById("results").textContent = "You lost the game!";
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
}

document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
