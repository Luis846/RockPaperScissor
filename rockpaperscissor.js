let playerScore = 0;
let computerScore = 0;

function computerPlay(){
options = ['rock', 'paper', 'scissors'];
randomOption = Math.floor(Math.random() * 3);
return options[randomOption];
}


function playerPlay(){
let choice = prompt('Rock, Paper, Scissors');
choice.toLowerCase();
return choice;
}

function gameRound(playerChoice, computerChoice){
playerChoice = playerPlay();
computerChoice = computerPlay();

if(computerChoice === playerChoice){
return 'Tie game';
}
else if(computerChoice === 'rock' && playerChoice === 'scissors'){
   computerScore++;
}

else if( computerChoice === 'paper' && playerChoice === 'rock'){
   computerScore++;
}

else if( computerChoice === 'scissors' && playerChoice === 'paper'){
   computerScore++;
}
else{
   playerScore++;
}
}




function game(){
for(let i = 0; i < 5; i++){
    gameRound();

}
if(playerScore > computerScore){
   console.log(`You win with the score of ${playerScore} Computer: ${computerScore}`);
}else if ( computerScore > playerScore){
   console.log(`AI's are taking over!!!! You lost! the score was computer:${computerScore} Human:${playerScore}`);

}else if(playerScore === computerScore){
   console.log(`TieGame`);
}

}