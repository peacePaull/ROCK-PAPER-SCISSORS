const options = ['rock', 'paper', 'scissors']

function getComputerChoice () {
    let computerChoice = options[Math.floor(Math.random() * options.length)] ;
    console.log(`Computer chose ${computerChoice}`)
    return computerChoice
}

function getPlayerChoice (){
    let playerOption = prompt('enter an option: ').toLowerCase();
    console.log(`You chose ${playerOption}`);
    return playerOption
}

let player = getPlayerChoice();
let computer = getComputerChoice();

function playRound(computerSelection, playerSelection){
   
    if(computerSelection === playerSelection){
        console.log('It\'s a Draw')
    }else if (computerSelection === 'scissors' && playerSelection === 'paper'){
        console.log("You lose, Scissors beat Paper");
    }else if(computerSelection === 'scissors' && playerSelection === 'rock'){
        console.log("You win, Rock beat Scissors");
    }else if(computerSelection === 'paper' && playerSelection === 'rock'){
        console.log("You lose, Paper beat Rock");
    }else if(computerSelection === 'paper' && playerSelection === 'scissors'){
        console.log("You win, Scissors beat Paper");
    }else if(computerSelection === 'rock' && playerSelection === 'scissors'){
        console.log('You lose, Rock beat Scissors');
    }else if(computerSelection === 'rock' && playerSelection === 'paper'){
        console.log('You win, Paper beat Rock');
    }else{
        console.log('You lose, you entered the wrong option')
    }
}


