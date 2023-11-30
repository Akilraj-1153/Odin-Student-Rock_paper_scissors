function getComputerChoice(){
    var text=[
        "Rock",
        "Paper",
        "Sissor"
    ];
    var textIndex = Math.floor(Math.random()*text.length);
    var randomText = text[textIndex];
    return randomText;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return "Tie";
    }
    else if(playerSelection ==="Rock" && computerSelection==="Sissor"){
        return "You Won!, Rock beats Sissor";
    }
    else if(playerSelection ==="Rock" && computerSelection==="Paper"){
        return "You Lose! Paper beats Rock";
    }
    console.log(playRound);
  }
   
  const playerSelection = "Rock";
  const computerSelection = getComputerChoice();
  console.log("playerSelection"+" "+playerSelection);
  console.log("computerSelection"+" "+computerSelection);
  console.log(playRound(playerSelection, computerSelection));