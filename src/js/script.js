const buttons = document.querySelectorAll('[data-id="btn"]');
let score = document.querySelector('[data-id="score"]');
const game = ['rock', 'paper', 'scissors'];
const ruleButton = document.querySelector('[data-id="rule__btn"]');
console.log(score.innerText)
const choice = {
  computerChoice: undefined,
  userChoice: undefined,
}



buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let {computerChoice, userChoice} = choice;
        computerChoice = game[Math.floor(Math.random() * game.length)];
        userChoice = button.getAttribute('id');
        // console.log(computerChoice)
    gameDecision(computerChoice, userChoice);
    });
});
// console.log(choice.userChoice);

function gameDecision(compChoice, usrChoice) {
    let computerChoice = compChoice;
    let userChoice = usrChoice;
    if (compChoice === 'rock' && usrChoice === 'scissors' || compChoice === 'scissors' && userChoice === 'paper' || compChoice === 'paper' && usrChoice === 'rock' ) {
        let scoreValue = parseFloat(score.innerText);
        scoreValue += 1;
        score.innerText = scoreValue;
    };
};


ruleButton.addEventListener('click', () => {
    const hide = ruleButton.parentElement.parentElement.querySelector('.game__img-container');
    const open = hide.querySelector('.rules__instruction');
    console.log(hide);
    hide.style.display = 'none';
    open.style.display = 'block';
})