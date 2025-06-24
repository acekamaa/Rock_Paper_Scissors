// check connection
console.log("Connection successful!")

function getComputerChoice(){
let randomNum = Math.random()

if (randomNum < 0.33){
    console.log("rock")
} else if (randomNum < 0.66) {
    console.log("paper")
}
else {
    console.log("scissors")
}
}

// prompt user for their response
let user = prompt("Rock, Paper, Scissors")

getComputerChoice()
