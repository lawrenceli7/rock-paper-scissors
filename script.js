function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    const choice = prompt("Please enter rock, paper, or scissors:").toLowerCase();
    if (["rock", "paper", "scissors"].includes(choice)) {
        return choice;
    } else {
        alert("Invalid choice, please try again.");
        return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`Human: ${humanScore}, Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("You won the game.");
    } else if (humanScore < computerScore) {
        console.log("You lost the game.");
    } else {
        console.log("It's a tie game!");
    }

}

playGame();
