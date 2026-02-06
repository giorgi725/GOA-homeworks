const myscore = document.getElementById("yourscore")
const compscore = document.getElementById("compscore")
const compchoise = document.getElementById("compchoise")
const rockbtn = document.getElementById("rock")
const paperbtn = document.getElementById("paper")
const scissorsbtn = document.getElementById("scissors")
const result = document.getElementById("result")

const options = ["rock", "paper", "scissors"]
let computerScore = 0
let yourScore = 0

function play (user){
    const computer = options[Math.floor(Math.random() * 3)]
    compchoise.textContent = `computer choise: ${computer}`
    if (user == computer) {
        result.textContent = "its tie"
    } else if (user === "paper" && computer === "rock",
        user === "scissors" && computer === "paper",
        user === "rock" && computer === "scissors"){
            result.textContent = "you win"
            yourScore++;
            myscore.textContent = `your score: ${yourScore}`
        } else {
            result.textContent = "computer win"
            computerScore++;
            compscore.textContent = `computer score: ${computerScore}`
        }
}

rockbtn.addEventListener("click", () => play("rock"))
paperbtn.addEventListener("click", () => play("paper"))
scissorsbtn.addEventListener("click", () => play("scissors"))