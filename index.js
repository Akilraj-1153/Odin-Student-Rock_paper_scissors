function NewGame(){
    location.reload()
}

function getComputerChoice() {
    var text = ["Rock", "Paper", "Scissor"];
    var textIndex = Math.floor(Math.random() * text.length);
    var randomText = text[textIndex];
    return randomText;
}

    
function playRound(PlayerChoice, computerSelection) {
        if (PlayerChoice === computerSelection) {
            tie+=1
            return "Tie";  
        } 
        else if (
            (PlayerChoice === "Rock" && computerSelection === "Scissor") ||
            (PlayerChoice === "Paper" && computerSelection === "Rock") ||
            (PlayerChoice === "Scissor" && computerSelection === "Paper")
            
        ) {
            player += 1;
            return "You Won! " + PlayerChoice + " beats " + computerSelection;
        } else if(
            (PlayerChoice === "Scissor" && computerSelection === "Rock") ||
            (PlayerChoice === "Paper" && computerSelection === "Scissor") ||
            (PlayerChoice === "Rock" && computerSelection === "Paper")
        ){
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
    document.getElementById("tieScore").innerHTML = tie;
    
    if(Roundno == Roundlimit || player == 3 || computer == 3){
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
let tie=0;
let player = 0;
let computer = 0;
console.log(game());
