function computerPlay() {
    const options = {
        1: "rock",
        2: "paper",
        3: "scissors",
    };
    return options[Math.floor(Math.random() * 3) + 1];
}

function decideWinner(player, computer) {
    const options = {
        rock: 1,
        paper: 2,
        scissors: 3,
    };
    if (options[player] === options[computer]) return "draw";
    if (options[player] - options[computer] === 1 || options[player] - options[computer] === -2) return "player";
    return "computer";
}

function playRound() {
    const player = prompt("Choose rock, paper or scissors:").toLowerCase();
    const computer = computerPlay();
    return decideWinner(player, computer);
}

function writeMessage(winner) {
    switch (winner) {
        case "draw":
            return "It's a draw";
        case "player":
            return "You won this round";
        case "computer":
            return "You lost this round"
    }
}

function game() {
    let playerCount = 0;
    let computerCount = 0;
    let drawCount = 0;
    for (let i = 0; i < 5; i++) {
        const winner = playRound();
        switch (winner) {
            case "draw":
                drawCount++;
                break;
            case "player":
                playerCount++;
                break;
            case "computer":
                computerCount++;
                break;
        }
        console.log(writeMessage(winner));
    }
    if (playerCount > computerCount) console.log("Congrats, you won the game! You won " + playerCount + " rounds.");
    else if (computerCount > playerCount) console.log("You lost the game! You lost " + computerCount + " rounds.");
    else console.log("It's a draw! You've both won " + playerCount + " rounds and drawn " + drawCount + " rounds.");
}

game();
