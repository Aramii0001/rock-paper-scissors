const playerScore = document.querySelector('#player');
const computerScore = document.querySelector('#computer');
const result = document.querySelector('.winner');
const choiceBtns = document.querySelectorAll('.btn');
const replayBtn = document.createElement("span")
let player_score = 0;
let computer_score = 0;

function getRandomInt(max){
    return Math.floor(Math.random()*max);
}

function getComputerChoice(){
    const i = getRandomInt(3);
    if (i === 0){
        return 'rock';
    }
    else if (i === 1){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}

function playRound(player_choice){
    computer = getComputerChoice();

    if (computer===player_choice){
        //console.log('tie!');
    }
    else if(computer==="rock"){
        (player_choice==="paper") ? player_score++ : computer_score++;
    }
    else if(computer==="paper"){
        (player_choice==="scissors") ? player_score++ : computer_score++;
    }
    else if(computer==="scissors"){
        (player_choice==="rock") ? player_score++ : computer_score++;
    }

    updateScores(player_score, computer_score);
}

function updateScores(player_score, computer_score){
    playerScore.textContent = `Player Score: ${player_score}`;
    computerScore.textContent = `Computer Score: ${computer_score}`;

    if (player_score === 5 || computer_score === 5){
        pickWinner();
    }
}

function pickWinner(){
    if (player_score > computer_score){
        result.textContent = 'Player win!';
    }
    else{
        result.textContent = 'Computer win!';
    }

    playAgain();
}

function playAgain(){
    replayBtn.textContent = 'replay'
    result.append(replayBtn)
    //the below does not work
    choiceBtns.forEach(button => button.removeEventListener("click"));
}

choiceBtns.forEach(button => button.addEventListener("click", () => {
    player_choice = button.textContent.toLowerCase();
    playRound(player_choice);
}));

replayBtn.addEventListener("click", () => {
    player_score = 0;
    computer_score = 0;
    updateScores(player_score, computer_score);
    result.textContent = "The winner is: ";
    result.removeChild(replayBtn);
});