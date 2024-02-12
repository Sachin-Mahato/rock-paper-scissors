const buttons = document.querySelectorAll('[data-id="btn"]');
let score = document.querySelector('[data-id="score"]');
const ruleButton = document.querySelector('[data-id="rule__btn"]');
const closeBtn = document.querySelector('[data-id="close__btn"]');

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const game = [rock, paper, scissors];
console.log(game);

const choice = {
  computerChoice: undefined,
  userChoice: undefined,
};

function gameDecision(compChoice, usrChoice) {
  let computerChoice = compChoice;
  let userChoice = usrChoice;
  if (
    (computerChoice === rock && usrChoice === scissors) ||
    (computerChoice === scissors && userChoice === paper) ||
    (computerChoice === paper && usrChoice === rock)
  ) {
    let scoreValue = parseFloat(score.innerText);
    scoreValue += 1;
    score.innerText = scoreValue;
  }
}

function userChoice(event) {}
userChoice();

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let { computerChoice, userChoice } = choice;
    computerChoice = game[Math.floor(Math.random() * game.length)];
    userChoice = button.getAttribute("id");
    const hideImgWrapper = event.currentTarget.parentElement.parentElement;
    hideImgWrapper.style.display = "none";
    // Push element
    const hiddenChoice = document.createElement("div");
    hiddenChoice.classList.add("hiddenChoice");
    const userSelect = document.createElement("div");
    userSelect.classList.add("user__select");
    const computerSelect = document.createElement("div");
    computerSelect.classList.add("computer__select");
    const p = document.createElement("p");
    const p2 = document.createElement("p");
    p.classList.add("title");
    p.textContent = "You Picked";
    p2.classList.add("title");
    p2.textContent = "the house picked";
    const parent = document.body.querySelector(".game__container");

    const secondElement = parent.children[1];
    parent.insertBefore(hiddenChoice, secondElement);

    hiddenChoice.appendChild(userSelect);
    hiddenChoice.appendChild(computerSelect);

    userSelect.appendChild(event.currentTarget.cloneNode(true));
    computerSelect.appendChild(computerChoice.cloneNode(true));
    userSelect.appendChild(p);
    computerSelect.appendChild(p2);
    // hiddenChoice.appendChild(computerChoice.cloneNode(true))
    gameDecision(computerChoice, userChoice);
  });
});
// console.log(choice.userChoice);

ruleButton.addEventListener("click", (event) => {
  const displayRules = event.target.parentElement.parentElement.querySelector(
    ".rules__instruction"
  );
  displayRules.classList.toggle("game__rules");
  // Example JavaScript to trigger the transition
  document.querySelector(".game__container").classList.add("slide-up");
});

closeBtn.addEventListener("click", (event) => {
  const hideRules = event.target.parentElement.parentElement.parentElement;
  hideRules.classList.remove("game__rules");
});
