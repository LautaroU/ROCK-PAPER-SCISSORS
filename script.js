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




let rockButton = document.getElementById("rockButton");
rockButton.addEventListener("click",playRound);

 function playRound (playerSelection, computerSelection) {
  
  playerSelection = "rock";
  computerSelection = computerPlay();
   
  if (playerSelection === computerSelection){
    document.getElementById("result").innerHTML = "Draw";
  }else if (playerSelection === "rock" && computerSelection === "scissors"){
    document.getElementById("result").innerHTML = "You win! Rock beats Scissors";
  }else if (playerSelection === "rock" && computerSelection === "paper"){
    document.getElementById("result").innerHTML = "You lose! Paper beats Rock";
 
}

}

let paperButton = document.getElementById("paperButton");
paperButton.addEventListener("click", playRound2);

function playRound2 (playerSelection, computerSelection) {
  
  playerSelection = "paper";
  computerSelection = computerPlay();
   
  if (playerSelection === computerSelection){
    document.getElementById("result").innerHTML = "Draw";
  }else if (playerSelection === "paper" && computerSelection === "scissors"){
    document.getElementById("result").innerHTML = "You lose! Scissors beats Paper";
  }else if (playerSelection === "paper" && computerSelection === "rock"){
    document.getElementById("result").innerHTML = "You win! Paper beats Rock";
}

}

let scissorsButton = document.getElementById("scissorsButton");
scissorsButton.addEventListener("click", playRound3); 

function playRound3 (playerSelection, computerSelection) {
  
  playerSelection = "scissors";
  computerSelection = computerPlay();
   
  if (playerSelection === computerSelection){
    document.getElementById("result").innerHTML = "Draw";
  
  }else if (playerSelection === "scissors" && computerSelection === "rock"){
    document.getElementById("result").innerHTML = "You lose! Rock beats Scissors";
  }else 
    document.getElementById("result").innerHTML = "You win! Scissors Beats Paper";
  }
  


function game(){
  for (i = 0; i < 5; i++){
    playRound();
  
  }
}

 
//function resultadin() {
   // document.getElementById(result);
    

//}

  

//if (playerSelection === computerSelection){
//  console.log("Draw");
//}else if (playerSelection === "rock" && computerSelection === "scissors"){
  //console.log("You win! Rock beats Scissors ");
//}else if (playerSelection === "rock" && computerSelection === "paper"){
  //console.log("You lose! Paper beats Rock");
//}else if (playerSelection === "paper" && computerSelection === "scissors"){
  //console.log("You lose! Scissors beats Paper");
//}else if (playerSelection === "paper" && computerSelection === "rock"){
  //console.log("You win! Paper beats Rock");
//}else if (playerSelection === "scissors" && computerSelection === "rock"){
//  console.log("You lose! Rock beats Scissors");
//}else {
//   console.log("You win! Scissors Beats Paper");
//}//
