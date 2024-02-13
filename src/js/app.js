const buttons = document.querySelectorAll('[data-id="img"]');
let score = document.querySelector('[data-id="score"]');
const ruleButton = document.querySelector('[data-id="rule__btn"]');
const closeBtn = document.querySelector('[data-id="close__btn"]');
const resultTitle = document.body.querySelector(".result__title");
const playAgain = document.body.querySelector('[data-id="play__again"]');



const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

let choiceAppended = false;

const game = [rock, paper, scissors];
// console.log(game);

const choice = {
  computerChoice: undefined,
  userChoice: undefined,
};

function gameDecision(compChoice, usrChoice) {
  const computerChoice = compChoice;
  const userChoice = usrChoice;
  let scoreValue = parseFloat(score.innerText);
  // console.log('computer:', computerChoice, 'user: ', userChoice)
  if (computerChoice === userChoice) {
    resultTitle.textContent = "draw";
  } else if (
    (computerChoice === rock && userChoice === scissors) ||
    (computerChoice === scissors && userChoice === paper) ||
    (computerChoice === paper && userChoice === rock)
  ) {
    resultTitle.textContent = "you lose";
  } else {
    score.innerText = scoreValue;
    console.log(typeof score.innerText);
    scoreValue += 1;
    score.innerText = scoreValue;
    resultTitle.textContent = "you win";
  }
}

function userChoice(event) {}
userChoice();

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const userSelect = document.body.querySelector(".user__select");
    const computerSelect = document.body.querySelector(".computer__select");
    

      let { computerChoice, userChoice } = choice;
      computerChoice = game[Math.floor(Math.random() * game.length)];
      userChoice = event.currentTarget.parentElement;
      console.log('user: ', userChoice);
      const hiddenChoice = document.querySelector(".hiddenChoice");
      const hideImg = event.target.parentElement.parentElement.parentElement;
      console.log(hideImg);
      hiddenChoice.classList.add('hideChoice');
      hideImg.classList.add('hide');
      console.log('hideChoide', hiddenChoice)
      userSelect.appendChild(event.currentTarget.parentElement.cloneNode(true));
      computerSelect.appendChild(computerChoice.cloneNode(true));
      gameDecision(computerChoice, userChoice);
  });
});
// console.log(choice.userChoice);


playAgain.addEventListener('click', (event) => {
  let {computerChoice, userChoice} = choice;
  computerChoice = '';
  userChoice = '';
    const userSelect = document.body.querySelector(".user__select");
  const computerSelect = document.body.querySelector(".computer__select");
  userSelect.innerHTML = '';
  computerSelect.innerHTML = '';
  const removeHide = document.body.querySelector('.game__img__wrapper');
  removeHide.classList.remove('hide');
  removeHide.classList.add('animate');
  const removeHiddenChoice = document.body.querySelector('.hiddenChoice');
  removeHiddenChoice.classList.remove('hideChoice');
})

ruleButton.addEventListener("click", (event) => {
  const displayRules = event.target.parentElement.parentElement.querySelector(
    ".rules__instruction"
  );
  displayRules.classList.toggle("game__rules");
  displayRules.classList.add("animate");
  // Example JavaScript to trigger the transition
  document.querySelector(".game__container").classList.add("slide-up");
});

closeBtn.addEventListener("click", (event) => {
  const hideRules = event.target.parentElement.parentElement.parentElement;
  hideRules.classList.remove("game__rules");
  const rulesAnimation = document.body.querySelector('.rules__instruction');
  rulesAnimation.classList.add('animate__top');
});


