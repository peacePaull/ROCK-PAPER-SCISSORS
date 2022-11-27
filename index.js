const options = ['rock', 'paper', 'scissors']

function getComputerChoice () {
    let computerChoice = options[Math.floor(Math.random() * options.length)] ;
    return computerChoice
}

function checkWinner(computerSelection, playerSelection){
    if(computerSelection == playerSelection){
        return "Tie"
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper") 
    ){
        return "Player"
    }else{
        return "Computer"
    }
}

function playRound(computerSelection, playerSelection){
   const result = checkWinner(computerSelection, playerSelection);
   if(result == "Tie"){
    return "It's a Tie"
   }
   else if(result == "Player"){
    return `You win! ${playerSelection} beats ${computerSelection}`
   }
   else{
    return `You lose ${computerSelection} beats ${playerSelection}`
   }

}

function getPlayerChoice() {
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock Paper Scissors").toLowerCase();
        if(choice == null){
            continue
        }
        if(options.includes(choice)){
            validatedInput = true;
            return choice
        }
    }
}

function game(){
    console.log("Welcome!")
    let playerScore = 0;
    let computerScore = 0;

    for(let i=0; i<5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        
        console.log(`Player chose ${playerSelection} and computer chose ${computerSelection}
       ...................................................`)
        console.log(playRound(computerSelection, playerSelection));
       
       if(checkWinner(computerSelection, playerSelection) == "Player"){
        playerScore++;
       }
       else if(checkWinner(computerSelection, playerSelection) == "Computer"){
        computerScore++;
       }
    }
    console.log("Game Over")
    if(playerScore > computerScore){
        console.log("Player Wins")
    }else if (playerScore < computerScore){
        console.log("Computer Wins")
    }
}

game()