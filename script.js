// Rock, paper, scissors game

let options = ["rock", "paper", "scissors"]
let playerScore = 0
let comScore = 0
let winMsg = "You Won!!!"
let loseMsg = "Com Wins!"
let drawMsg = "It's a tie!"
const textP = document.getElementById("resultText")
const scoreBox = document.getElementById("scoreText")
const btnRock = document.getElementById("btnRock")
const btnPaper = document.getElementById("btnPaper")
const btnScissors = document.getElementById("btnScissors")
const winnerBox = document.getElementById("winnerText")
let playerChoice;

// Computer random choice function
function getComputerChoice () { 
  let optIndex = Math.floor(Math.random()*options.length) 
  let computerChoice = options[optIndex]
  return computerChoice
}

//Rock button listener
btnRock.addEventListener("click", () => {
  playerChoice = "rock"
  let computerChoice = getComputerChoice()
  playRound(playerChoice, computerChoice)
  console.log(computerChoice)
});

//Paper Button listener
btnPaper.addEventListener("click", () => {
  playerChoice = "paper"
  let computerChoice = getComputerChoice()
  playRound(playerChoice, computerChoice)
  console.log(computerChoice)
});

//Scissors button listener
btnScissors.addEventListener("click", () => {
  playerChoice = "scissors"
  let computerChoice = getComputerChoice()
  playRound(playerChoice, computerChoice)
  console.log(computerChoice)
});

//Score on <div>
function score(){
  scoreBox.textContent = `${playerScore} - ${comScore}`
}

// Winner determination function
function playRound (playerSelection, computerSelection){
  if (playerSelection == computerSelection) {
      textP.textContent = "It's a draw!"
    } else if (playerSelection == 'rock' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'scissors' || playerSelection == 'scissors' && computerSelection == 'rock'){
      comScore++
      score()
      textP.textContent = "You loose!"
      winnerBox.textContent = ""
      if(comScore == 5){
        winnerBox.textContent = ("Game Over - You've lost!!!")
        playerScore = 0
        comScore = 0
      }
    } else if (playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'scissors' && computerSelection == 'paper') {
      playerScore++   
      score()
      textP.textContent = "You won!"
      winnerBox.textContent = ""
      if(playerScore == 5){
        winnerBox.textContent = ("You've Won - Game Over!!!")
        playerScore = 0
        comScore = 0
      }
    }
}






// // Here we determine the winner (or not) after five games.
// function playGame() {
//    let playerScore = 0
//    let comScore = 0

//    for (let i = 0; i < 5; i++){

//     // User choice validation
//     //let playerChoice = "rock"
//     let playerChoice = prompt("Choose either 'Rock, Paper or Scissors: ")
//     playerChoice = playerChoice.toLowerCase()
    
//     if(!options.includes(playerChoice)){
//         alert("Enter a valid option. ")
//         playerChoice = prompt("Choose either 'Rock, Paper or Scissors: ")
//     } 

//     let computerSelection = getComputerChoice()

//    //Points determination
//     if(playRound(playerChoice, computerSelection) > 0){
//        playerScore++
//     } else if (playRound(playerChoice, computerSelection) < 0 ){
//        comScore++
//     }
//   }
//   // Final result showed
//     if(playerScore > comScore){
//         alert(`You've won! ${playerScore} - ${comScore}.`)
//         console.log(`You win! ${playerScore} - ${comScore}.`)
//     } else if (score < 0){
//         console.log(`You've lost! ${comScore} - ${playerScore}.`)
//     } else {
//         console.log("It's a tie!")
//   }
// }
// playGame()

