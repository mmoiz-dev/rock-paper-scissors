let humanScore = 0;
let computerScore = 0;

const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");
const buttons = document.querySelectorAll("button");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    if (humanScore >= 5 || computerScore >= 5) return;

    if (humanChoice === computerChoice) {
        resultDiv.textContent = `It's a tie! You both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    scoreDiv.textContent = `Score -> You: ${humanScore}, Computer: ${computerScore}`;

    if (humanScore === 5) {
        resultDiv.textContent += " 🎉 You won the game!";
    } else if (computerScore === 5) {
        resultDiv.textContent += " 🤖 The computer won the game!";
    }
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const humanChoice = button.getAttribute("data-choice");
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});