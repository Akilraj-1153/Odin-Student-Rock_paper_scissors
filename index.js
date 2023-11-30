function getComputerChoice() {
    var text = ["Rock", "Paper", "Scissor"];
    var textIndex = Math.floor(Math.random() * text.length);
    var randomText = text[textIndex];
    return randomText;
}

function getPlayerChoice() {
    var text = ["Rock", "Paper", "Scissor"];
    var textIndex = Math.floor(Math.random() * text.length);
    var randomText = text[textIndex];
    return randomText;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie";
    } else if (playerSelection === "Rock" && computerSelection === "Scissor" || playerSelection === "Paper" && computerSelection === "Rock" || playerSelection === "Sissor" && computerSelection === "Paper") {
        player += 1;
        return "You Won!, Rock beats Scissor";
    } else  {
        computer += 1;
        return "You Lose! Paper beats Rock";
    }
}

function game() {
    for (let i = 1; i <= 5; i++) {
        const playerSelection = getPlayerChoice(); 
        const computerSelection = getComputerChoice();
        console.log("Round" + ":" + i);
        console.log("playerSelection" + " : " + playerSelection);
        console.log("computerSelection" + " : " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log("player point" + ":" + player);
        console.log("computer point" + ":" + computer);
    }

    if (player >= 3 || (player > computer)) {
        return "Player wins";
    } else if (computer >= 3 || (player < computer)) {
        return "Computer Wins";
    } else {
        return "Tie";
    }
    
}

let player = 0;
let computer = 0;
console.log(game());

