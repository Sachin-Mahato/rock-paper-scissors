const buttons = document.querySelectorAll("button");
const results = document.querySelector(".results");

buttons.forEach(button => {
    button.addEventListener("click", () =>{
        const playerSelection = button.classList[0];
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        results.innerHTML = result;
    })

});


const choice = ['rock', 'paper', 'scissors'];
function getComputerChoice(){
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return "It's a tie!"; } else if ( (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) { return "You win!"; } else { return "Computer wins!"; }














