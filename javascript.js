const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const usernameBox = document.getElementById('username-box');
const usernameInput = document.getElementById('username');
const terminalContainer = document.querySelector('.container');
const terminalTitle = document.getElementById('title');
const introBox = document.querySelector('.intro');
const input = document.getElementById('input-text');
const terminal = document.getElementById('terminal');
let cmd;
let player_score = 0;
let computer_score = 0;
let round;
let username;


input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        displayText();
        command(input);

        input.value = '';
    }
});

function displayText() {
    const line = document.createElement('div');
    line.textContent = '> ' + input.value;
    line.classList.add('line');
    terminal.appendChild(line);
}

function command(input) {
    cmd = '';
    switch (input.value.toLowerCase()) {
        case 'help':
            cmd = 'help';
            break;
        case 'whois':
            cmd = 'whois';
            break;
        case 'whoami':
            cmd = 'whoami';
            break;
        case 'play -rock':
            cmd = 'rock';
            break;
        case 'play -paper':
            cmd = 'paper';
            break;
        case 'play -scissors':
            cmd = 'scissors';
            break;
        case 'clear':
            cmd = 'clear';
            break;
        case 'play -reset':
            cmd = 'reset';
            break;
    }
    computerOutput();
}
function computerOutput() {
    const line = document.createElement('div');
    if (cmd === 'help'){
        line.textContent = 'help, whoami, whois, play -rock, play -paper, play -scissors, play -reset, clear';
    }
    else if (cmd === 'whoami'){
        line.textContent = username;
    }
    else if (cmd === 'whois'){
        line.textContent = "Hello! I go by the username Aramii and I am the creator of this web-game. My github link is in the footer. hint: mouse over my username"
    }
    else if (cmd === 'rock'){
        playRound('rock');
    }
    else if (cmd === 'paper'){
        playRound('paper');
    }
    else if (cmd === 'scissors'){
        playRound('scissors');
    }
    else if (cmd === 'reset'){
        line.textContent = 'Game has been reset.';
        player_score = 0;
        computer_score = 0;
    }
    else if (cmd === 'clear'){
        const lines = document.getElementsByClassName('line');
        for (let i=0; i<lines.length; i++) {
            lines.item(i).style.display = "none";
        }
    }
    else{
        line.textContent = 'That is not a valid command. Enter "help" to recieve an exhaustive list of all commands.'
    }

    line.classList.add('line');
    terminal.appendChild(line);
}


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
if (player_score < 5 && computer_score < 5){
    if (computer===player_choice){
        round='Tie game';
    }
    else if(computer==="rock"){
        (player_choice==="paper") ? (player_score++, round='Player score!') : (computer_score++, round='Computer score!');
    }
    else if(computer==="paper"){
        (player_choice==="scissors") ? (player_score++, round='Player score!') : (computer_score++, round='Computer score!');
    }
    else if(computer==="scissors"){
        (player_choice==="rock") ? (player_score++, round='Player score!') : (computer_score++, round='Computer score!');
    }

    updateScores(player_score, computer_score, round);
}
else{
    const line = document.createElement('div');
    line.textContent = 'A winner has already been decided. To play again please use the command "play -reset"'
    line.classList.add('line');
    terminal.appendChild(line);
}
}

function updateScores(player_score, computer_score, round) {
    const line = document.createElement('div');
    line.textContent = round;
    line.classList.add('line');
    const line2 = document.createElement('div');
    line2.textContent = 'Player Score: ' +player_score;
    line2.classList.add('line');
    const line3 = document.createElement('div');
    line3.textContent = 'Computer Score: ' +computer_score;
    line3.classList.add('line');
    terminal.appendChild(line);
    terminal.appendChild(line2);
    terminal.appendChild(line3);

    if (player_score === 5 || computer_score === 5){
        pickWinner();
    }
}
function pickWinner(){
    const line = document.createElement('div');
    if (player_score > computer_score){
        line.textContent = 'PLAYER WINS!';
    }
    else{
        line.textContent = 'COMPUTER WINS!';
    }
    line.classList.add('line');
    terminal.appendChild(line);
}

// WEBSITE STUFF \/

//Title effects
document.querySelector('h1').onmouseover =
 event => {
    let iterations = 0;

    const interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
    .map((letter, index) => {
        if(index < iterations){
            return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)]
    })
    .join("");

        if(iterations >= 19) clearInterval(interval);
        
        iterations += 1;
    }, 60);
}

// INTRO SEQUENCE
//1
one.onanimationstart=
event => {
    let iterations = 0;

    const interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
    .map((letter, index) => {
        if(index < iterations){
            return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)]
    })
    .join("");

        if(iterations >= 17) clearInterval(interval);
        
        iterations += 1;
    }, 30);
}
one.onanimationend = () => {one.style.display = "none";}
//2
two.onanimationstart=
event => {
    let iterations = 0;

    const interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
    .map((letter, index) => {
        if(index < iterations){
            return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)]
    })
    .join("");

        if(iterations >= 76) clearInterval(interval);
        
        iterations += 1;
    }, 30);
}
two.onanimationend = () => {two.style.display = "none";}
//3
three.onanimationstart=
event => {
    let iterations = 0;

    const interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
    .map((letter, index) => {
        if(index < iterations){
            return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)]
    })
    .join("");

        if(iterations >= 72) clearInterval(interval);
        
        iterations += 1;
    }, 30);
}
three.onanimationend = () => {three.style.display = "none";}
//4
four.onanimationstart=
event => {
    let iterations = 0;

    const interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
    .map((letter, index) => {
        if(index < iterations){
            return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)]
    })
    .join("");

        if(iterations >= 26) clearInterval(interval);
        
        iterations += 1;
    }, 30);
}
four.onanimationend = () => {four.style.display = "none";}
//5
five.onanimationstart=
event => {
    let iterations = 0;

    const interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
    .map((letter, index) => {
        if(index < iterations){
            return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)]
    })
    .join("");

        if(iterations >= 55) clearInterval(interval);
        
        iterations += 1;
    }, 30);
}
five.onanimationend = () => {
    five.style.display = "none";
    introBox.style.display = "none";
    usernameBox.style.visibility = "visible";
}

usernameInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        username = usernameInput.value;
        console.log(username);
        usernameBox.style.display = "none";
        terminalContainer.style.visibility = "visible";
        terminalTitle.textContent = 'Terminal \u2014 '+username+'@'+username+'-VirtualBox: ~/Desktop/rockpaperscissors'
    }
});

//All that's left is to find a way to scroll and then we're done. But that's for tmrw. Cya