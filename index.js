console.log('loaded');

const playBtn = document.querySelector('#play-btn');
const valueInput = document.querySelector('#value-input');
const userChoiceResult = document.querySelector('#user-choice-span');
const computerChoiceResult = document.querySelector('#computer-choice-span');
const result = document.querySelector('#result'); 


function playGame() {
    let userChoice = getUserChoice(valueInput);
    displayChoice(userChoiceResult, userChoice);

    let computerChoice = getRandomComputerChoice();
    displayChoice(computerChoiceResult, computerChoice);

    let result = compareChoices(userChoice, computerChoice);
    displayResult(result);
}


function getUserChoice(userInputCtrl) {
    let userInput = userInputCtrl.value;
    if (userInput !== null) {
        userInput = userInput.toLowerCase();
    }
    return userInput;
}


function getRandomComputerChoice() {
    const possibleChoices = ['rock', 'paper', 'scissors'];
    return possibleChoices[Math.floor(Math.random() * 3)];
}


function displayChoice(displayCtrl, value) {
    displayCtrl.innerText = value;
}


function compareChoices(player1Choice, player2Choice) {
    switch (player1Choice + player2Choice) {
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            return 2;
            break;
        case 'paperrock':
        case 'scissorspaper':
        case 'rockscissors':
            return 1;
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            return 0;
            break;    
        default:
            return false;
            break;
    }
}


function displayResult(result) {
    switch (result) {
        case 0:
            displayResultMsg('It is a tie!');
            break;
        case 1:
            displayResultMsg('You win!');
            break;
        case 2:
            displayResultMsg('You lose!');
            break;
    
        default:
            displayResultMsg('Wrong input! Try again! This time, please fill in one of the three given values!');
            break;
    }
}

function displayResultMsg(resultMsg) {
    result.innerText = resultMsg;
}


playBtn.addEventListener('click', playGame);