// Rock, paper, scissors game

// Computer random choice function
let options = ["rock", "paper", "scissors"]

function getComputerChoice () {
   
    let optIndex = Math.floor(Math.random()*options.length) 
    let computerChoice = options[optIndex]
    return computerChoice
}

// Winner determination function
function playRound (playerSelection, computerSelection){
   
if (playerSelection == computerSelection) {
       alert(`It's a tie!`)
        return 0
    } else if (playerSelection == 'rock' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'scissors' || playerSelection == 'scissors' && computerSelection == 'rock'){
       alert(`You lose!: ${computerSelection} beats ${playerSelection}.`)
        return -1

    } else if (playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'scissors' && computerSelection == 'paper') {
       alert(`You Won!: ${playerSelection} beats ${computerSelection}`)
        return 1
    }   
}

// Here we determine the winner (or not) after five games.
function playGame() {
   let playerScore = 0
   let comScore = 0

   for (let i = 0; i < 5; i++){

    // User choice validation
    //let playerChoice = "rock"
    let playerChoice = prompt("Choose either 'Rock, Paper or Scissors: ")
    playerChoice = playerChoice.toLowerCase()
    
    if(!options.includes(playerChoice)){
        alert("Enter a valid option. ")
        playerChoice = prompt("Choose either 'Rock, Paper or Scissors: ")
    } 

    let computerSelection = getComputerChoice()

   //Points determination
    if(playRound(playerChoice, computerSelection) > 0){
       playerScore++
    } else if (playRound(playerChoice, computerSelection) < 0 ){
       comScore++
    }
  }
  // Final result showed
    if(playerScore > comScore){
        alert(`You've won! ${playerScore} - ${comScore}.`)
        console.log(`You win! ${playerScore} - ${comScore}.`)
    } else if (score < 0){
        console.log(`You've lost! ${comScore} - ${playerScore}.`)
    } else {
        console.log("It's a tie!")
  }
}
playGame()

