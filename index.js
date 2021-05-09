console.log('loaded');

const userChoiceResult = document.querySelector('#user-choice-span');
const computerChoiceResult = document.querySelector('#computer-choice-span');
const result = document.querySelector('.result');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const rockName = document.querySelector('#choice-rock');
const paperName = document.querySelector('#choice-paper');
const scissorsName = document.querySelector('#choice-scissors');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

const buttonStarter = document.querySelector('#animation-starter');

let player = 0;
let computer = 0;


function play() {
    rock.addEventListener('click', function(event) {
        removeClassAnimation();
        removeClassFromElements();
        addClassToElement(event);
        clickOnImage('rock');
    });
    
    paper.addEventListener('click', function(event) {
        removeClassAnimation();
        removeClassFromElements();
        addClassToElement(event);
        clickOnImage('paper');
    });
    
    scissors.addEventListener('click', function(event) {
        removeClassAnimation();
        removeClassFromElements();
        addClassToElement(event);
        clickOnImage('scissors');
    });
}

play();


function removeClassFromElements() {
    rock.classList.remove('choice--selected');
    paper.classList.remove('choice--selected');
    scissors.classList.remove('choice--selected');
    rockName.classList.remove('choice-name--selected');
    paperName.classList.remove('choice-name--selected');
    scissorsName.classList.remove('choice-name--selected');
}


function addClassToElement(event) {
    event.target.classList.add('choice--selected');
    event.target.nextElementSibling.classList.add('choice-name--selected');
}


function clickOnImage(choice) {
    displayChoice(userChoiceResult, choice);
    chooseTheAnimationForPlayer(userChoiceResult);

    let computerChoice = getRandomComputerChoice();
    displayChoice(computerChoiceResult, computerChoice);
    chooseTheAnimationForComputer(computerChoiceResult);

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


function chooseTheAnimationForPlayer(choiceResult) {
    switch(choiceResult.innerText) {
        case 'rock': 
            startRockAnimation();
            break;
        case 'paper':
            startPaperPlaneAnimation();
            break;
        case 'scissors':
            startScissorsAnimation();
            break;
    }
}


function chooseTheAnimationForComputer(choiceResult) {
    switch(choiceResult.innerText) {
        case 'rock': 
            startRockAnimationForComputer();
            break;
        case 'paper':
            startPaperPlaneAnimationForComputer();
            break;
        case 'scissors':
            startScissorsAnimationForComputer();
            break;
    }
}


function startRockAnimation() {
    const stone = document.getElementById('stoneImg');
    stone.classList.add('stone--for-player');
    result.classList.add('result--selected'); 
}


function startPaperPlaneAnimation() {
    const paperPlane = document.getElementById('paperPlaneImg');
    paperPlane.classList.add('paper-plane--for-player');
    result.classList.add('result--selected');
}


function startScissorsAnimation() {
    const pearOfScissors = document.getElementById('pairOfScissorsImg');
    pearOfScissors.classList.add('pair-of-scissors--for-player');
    result.classList.add('result--selected');
}


function startRockAnimationForComputer() {
    const stoneForComputer = document.getElementById('stoneImgForComputer');
    stoneForComputer.classList.add('computer-stone--selected');
}


function startPaperPlaneAnimationForComputer() {
    const paperPlaneForComputer = document.getElementById('paperPlaneImgForComputer');
    paperPlaneForComputer.classList.add('computer-paper-plane--selected');
}


function startScissorsAnimationForComputer() {
    const scissorsForComputer = document.getElementById('scissorsImgForComputer');
    scissorsForComputer.classList.add('computer-scissors--selected');
}


function removeClassAnimation() {
    const stone = document.getElementById('stoneImg');
    const paperPlane = document.getElementById('paperPlaneImg');
    const pairOfScissors = document.getElementById('pairOfScissorsImg');
    const computerStone = document.getElementById('stoneImgForComputer');
    const computerPaperPlane = document.getElementById('paperPlaneImgForComputer');
    const computerScissors = document.getElementById('scissorsImgForComputer');
    
    stone.classList.remove('stone--for-player');
    paperPlane.classList.remove('paper-plane--for-player');
    pairOfScissors.classList.remove('pair-of-scissors--for-player');
    computerStone.classList.remove('computer-stone--selected');
    computerPaperPlane.classList.remove('computer-paper-plane--selected');
    computerScissors.classList.remove('computer-scissors--selected');
    result.classList.remove('result--selected');
}