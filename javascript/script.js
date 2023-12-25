let computerChoice;

function getComputerChoice (){
    computerChoice = Math.floor(Math.random() * 3);
  if(computerChoice === 0){
    console.log('rock', computerChoice)
    return 'rock';
  } else if (computerChoice === 1){
    console.log('paper', computerChoice)
    return 'paper';
  } else if (computerChoice === 2){
    console.log('scissor', computerChoice)
    return 'scissor';
  }
};

getComputerChoice();