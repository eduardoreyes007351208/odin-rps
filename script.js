
let getComputerChoice = () => {
    let randnum = Math.floor(Math.random() * 3);
    let choice = '';

    switch(randnum) {
        case 0:
            choice = 'Rock';
            break;
        case 1:
            choice = 'Paper';
            break;
        default:
            choice = 'Scissors';
            break;
    }
    return choice;
}

let getHumanChoice = () => {
    let answer = prompt("Please choose Rock, Paper, or Scissors");

    return answer;
}

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();
console.log(computerChoice);
console.log(humanChoice)