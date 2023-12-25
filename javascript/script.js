let choice;
function getComputerChoice (){
    choice = Math.floor(Math.random() * 3);
  if(choice === 0){
    console.log('rock', choice)
    return 'rock';
  } else if (choice === 1){
    console.log('paper', choice)
    return 'paper';
  } else if (choice === 2){
    console.log('scissor', choice)
    return 'scissor';
  }
};

getComputerChoice();