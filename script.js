// check connection
console.log("Connection successful!")

function getComputerChoice(){
  let a = "rock"
  let b = "paper"
  let c = "scissors"

  return (a | b | c)
}

Math.random(getComputerChoice)
getComputerChoice()
