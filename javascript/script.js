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


let playerChoice = prompt('Player chooses? rock / paper / scissor').toLowerCase();


function playRound(playerChoice, computerChoice){
    if(playerChoice === computerChoice){
        return 'Tied'
    } else if(playerChoice === 'rock'){
        if(computerChoice === 'paper'){
            return 'You lose!'
        } else {
            return 'You win!'
        }
    } else if(playerChoice === 'paper'){
        if(computerChoice === 'scissor'){
            return 'You lose!'
        } else {
            return 'You win!'
        }
    } else if(playerChoice === 'scissor'){
        if(computerChoice === 'rock'){
            return 'You lose!'
        } else {
            return 'You win!'
        }
    }
}

