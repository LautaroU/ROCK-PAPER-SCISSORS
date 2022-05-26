function random(number) {
    return Math.floor(Math.random()*number);
    
  }


function computerPlay() {

let num = random(3);

if (num === 0){
  return("rock");
} else if (num === 1){
  return("paper");

} else  {
  return("scissors");

} 


}

function playRound (playerSelection, computerSelection) {
  let sign = prompt ("Rock, Paper, Scissors") 
  playerSelection = sign;
   computerSelection = computerPlay();
   
  if (playerSelection === computerSelection){
    console.log("Draw");
  }else if (playerSelection === "rock" && computerSelection === "scissors"){
    console.log("You win! Rock beats Scissors ");
  }else if (playerSelection === "rock" && computerSelection === "paper"){
    console.log("You lose! Paper beats Rock");
  }else if (playerSelection === "paper" && computerSelection === "scissors"){
    console.log("You lose! Scissors beats Paper");
  }else if (playerSelection === "paper" && computerSelection === "rock"){
    console.log("You win! Paper beats Rock");
  }else if (playerSelection === "scissors" && computerSelection === "rock"){
    console.log("You lose! Rock beats Scissors");
  }else {
     console.log("You win! Scissors Beats Paper");
  }
    

}

function game(){
  for (i = 0; i < 5; i++){
    playRound();
  
  }
}


  

