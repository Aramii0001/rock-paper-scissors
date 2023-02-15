
//Rock paper scissors, computer picks a choice
//Then website gives input popup for user choice
//Lastly, it checks for who won

function getRandomInt(max){
    return Math.floor(Math.random()*max);
}

function getComputerChoice(){
    const i = getRandomInt(3);
    let choice = ''
    if (i === 0){
        choice = 'rock';
    }
    else if (i ===1){
        choice = 'paper';
    }
    else{
        choice = 'scissors';
    }
    return choice;
}

let player_score = 0;
let computer_score = 0;

for (let n = 0; n<5; n++){
    computer = getComputerChoice();
    player = (window.prompt('What is your choice?')).toLowerCase();

    if (computer===player){
        console.log('tie!')
    }
    else if(computer==="rock"){
        (player==="paper") ? player_score++ : computer_score++;
    }
    else if(computer==="paper"){
        (player==="scissors") ? player_score++ : computer_score++;
    }
    else if(computer==="scissors"){
        (player==="rock") ? player_score++ : computer_score++;
    }
}

console.log(computer_score);
console.log(player_score);

if (player_score > computer_score){
    console.log('Player win')
}
else if (computer_score > player_score){
    console.log('computer win')
}
else if (computer_score===player_score){
    console.log('game tie')
}
