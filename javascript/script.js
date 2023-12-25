function getComputerChoice (){
    let computerChoice = Math.floor(Math.random() * 3);
  if(computerChoice === 0){
    console.log('rock')
    return 'rock';
  } else if (computerChoice === 1){
    console.log('paper')
    return 'paper';
  } else if (computerChoice === 2){
    console.log('scissor')
    return 'scissor';
  }
};

getComputerChoice();