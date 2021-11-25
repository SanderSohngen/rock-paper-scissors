const score = document.createElement("div");
const playerScore = document.createElement("p");
const computerScore = document.createElement("p");
score.appendChild(playerScore);
score.appendChild(computerScore);
document.body.appendChild(score);

let playerScoreCount = 0;
let computerScoreCount = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((key) => {
	key.addEventListener("click", playRound);
});

function playRound() {
	if (playerScoreCount === 5 || computerScoreCount === 5) return;
	const playerChoice = this.textContent.toLowerCase();
	const computerChoice = playComputer();
	const winner = decideWinner(playerChoice, computerChoice);
	updateScore(winner);
	const message = writeMessage(winner, playerChoice, computerChoice);
	appendResult(message);
	if (playerScoreCount === 5 || computerScoreCount === 5) appendFinalResult(winner);
}

function playComputer() {
	const options = ["rock", "paper", "scissors"];
	return options[Math.floor(Math.random() * 3)];
}

function decideWinner(player, computer) {
	const options = {
		rock: 1,
		paper: 2,
		scissors: 3,
	};
	if (options[player] === options[computer]) return "draw";
	if (
		options[player] - options[computer] === 1 ||
		options[player] - options[computer] === -2
	)
		return "player";
	return "computer";
}

function updateScore(winner) {
	if (winner === "player") playerScoreCount++;
	else if (winner === "computer") computerScoreCount++;
	playerScore.textContent = `You've won ${playerScoreCount} rounds`;
	computerScore.textContent = `Computer has won ${computerScoreCount} rounds`;
}

function writeMessage(winner, playerChoice, computerChoice) {
	switch (winner) {
		case "draw":
			return `It's a draw, you both chose ${playerChoice}`;
		case "player":
			return `You won this round, ${playerChoice} beats ${computerChoice}`;
		case "computer":
			return `You lost this round, ${computerChoice} beats ${playerChoice}`;
	}
}

function appendResult(message) {
	const div = document.createElement("div");
	div.textContent = message;
	document.body.appendChild(div);
}

function appendFinalResult(winner) {
	const final = document.createElement("div");
	let msg = "";
	if (winner === "player") msg = "You've won the game! Grats";
	else msg = "You've lost the game! Get rekt";
	final.textContent = msg;
	document.body.appendChild(final);
}
