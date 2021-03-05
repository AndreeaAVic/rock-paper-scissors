console.log('loaded');

const userChoiceResult = document.querySelector('#user-choice-span');
const computerChoiceResult = document.querySelector('#computer-choice-span');
const result = document.querySelector('#result');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const rockName = document.querySelector('#choice-rock');
const paperName = document.querySelector('#choice-paper');
const scissorsName = document.querySelector('#choice-scissors');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

let player = 0;
let computer = 0;


function play() {
    rock.addEventListener('click', function() {
        this.classList.add('choice--selected');
        paper.classList.remove('choice--selected');
        scissors.classList.remove('choice--selected');
        rockName.classList.add('choice-name--selected');
        paperName.classList.remove('choice-name--selected');
        scissorsName.classList.remove('choice-name--selected');
        clickOnImage('rock');
    });
    
    paper.addEventListener('click', function() {
        this.classList.add('choice--selected');
        rock.classList.remove('choice--selected');
        scissors.classList.remove('choice--selected');
        paperName.classList.add('choice-name--selected');
        rockName.classList.remove('choice-name--selected');
        scissorsName.classList.remove('choice-name--selected');
        clickOnImage('paper');
    });
    
    scissors.addEventListener('click', function() {
        this.classList.add('choice--selected');
        rock.classList.remove('choice--selected');
        paper.classList.remove('choice--selected');
        scissorsName.classList.add('choice-name--selected');
        rockName.classList.remove('choice-name--selected');
        paperName.classList.remove('choice-name--selected');
        clickOnImage('scissors');
    });
}

play();


function clickOnImage(choice) {
    displayChoice(userChoiceResult, choice);

    let computerChoice = getRandomComputerChoice();
    displayChoice(computerChoiceResult, computerChoice);

    let result = compareChoices(choice, computerChoice);
    if (result === 2) {
        computer++;
        computerScore.innerHTML = computer;
    } else if (result === 1) {
        player++; 
        playerScore.innerHTML = player;
    } else {
       playerScore.innerHTML = player;
       computerScore.innerHTML = computer;
    }
    displayResult(result);
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
    }
}


function displayResultMsg(resultMsg) {
    result.innerText = resultMsg;
}
