
let getComputerChoice = () => {
    let randnum = Math.floor(Math.random() * 3);
    let choice = '';

    switch(randnum) {
        case 0:
            choice = 'rock';
            break;
        case 1:
            choice = 'paper';
            break;
        default:
            choice = 'scissors';
            break;
    }
    return choice;
}

let getHumanChoice = () => {
    let answer = prompt("Please choose Rock, Paper, or Scissors");

    return answer;
}

let playRound = (computerChoice, humanChoice) => {
    if (humanChoice == computerChoice) {
        return "Tie!"
    } else if (humanChoice == 'rock' && computerChoice == 'paper') {
        computerScore++;
        return "You lose! Paper beats Rock"
    } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        humanScore++;
        return "You win! Rock beats Scissors"
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        humanScore++;
        return "You win! Rock beats Scissors"
    }  else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        computerScore++;
        return "You lose! Paper beats Rock"
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        computerScore++;
        return "You lose! Paper beats Rock"
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        humanScore++;
        return "You win! Rock beats Scissors"
    }
}

let computerChoice = getComputerChoice().toLowerCase();
let humanChoice = getHumanChoice().toLocaleLowerCase();
let computerScore = 0;
let humanScore = 0;

console.log(computerChoice);
console.log(humanChoice)
console.log(playRound(computerChoice, humanChoice))
console.log(`Computer Score: ${computerScore}, Human Score: ${humanScore}`)