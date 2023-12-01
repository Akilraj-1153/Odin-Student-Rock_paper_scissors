function NewGame(){
    player=0;
    computer=0;
    const Roundno=0;
    document.getElementById("computerSelected").innerHTML = "Loading....";
    document.getElementById("RoundNo").innerHTML = Roundno;
    document.getElementById("RoundResult").innerHTML = "Start the Round";
    document.getElementById("playerScore").innerHTML = player;
    document.getElementById("computerScore").innerHTML = computer;
    document.getElementById("resultinfo").innerHTML = "Result of 5 Rounds";
}

function getComputerChoice() {
    var text = ["Rock", "Paper", "Scissor"];
    var textIndex = Math.floor(Math.random() * text.length);
    var randomText = text[textIndex];
    return randomText;
}

    
function playRound(PlayerChoice, computerSelection) {
        if (PlayerChoice === computerSelection) {
            return "Tie";  
        } 
        else if (
            (PlayerChoice === "Rock" && computerSelection === "Scissor") ||
            (PlayerChoice === "Paper" && computerSelection === "Rock") ||
            (PlayerChoice === "Scissor" && computerSelection === "Paper")
        ) {
            player += 1;
            return "You Won! " + PlayerChoice + " beats " + computerSelection;
        } else {
            computer += 1;
            return "You Lose! " + computerSelection + " beats " + PlayerChoice;
        }
}
    


function game(PlayerChoice) {
    if(Roundno<=Roundlimit){
    const computerSelection = getComputerChoice();
    var roundResult = playRound(PlayerChoice, computerSelection);
    document.getElementById("computerSelected").innerHTML = computerSelection;
    document.getElementById("RoundNo").innerHTML = Roundno;
    document.getElementById("RoundResult").innerHTML = roundResult;
    document.getElementById("playerScore").innerHTML = player;
    document.getElementById("computerScore").innerHTML = computer;
    
    
    if(Roundno == Roundlimit){
        if (player >= 3 || player > computer) {
            document.getElementById("resultinfo").innerHTML = "Player wins";
        } else if (computer >= 3 || player < computer) {
            document.getElementById("resultinfo").innerHTML = "Computer Wins";
        } else {
            document.getElementById("resultinfo").innerHTML = "Tie";
        }
    }
    Roundno++;
    }
}

let Roundlimit=5;
let Roundno = 1;  
let player = 0;
let computer = 0;
console.log(game());
