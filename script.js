
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

let playRound = (computerChoice, humanChoice) => {
    if (humanChoice == computerChoice) {
        return "Tie!"
    } else if (humanChoice == 'Rock' && computerChoice == 'Paper') {
        computerScore++;
        return "You lose! Paper beats Rock"
    } else if (humanChoice == 'Rock' && computerChoice == 'Scissors') {
        humanScore++;
        return "You win! Rock beats Scissors"
    } else if (humanChoice == 'Paper' && computerChoice == 'Rock') {
        humanScore++;
        return "You win! Rock beats Scissors"
    }  else if (humanChoice == 'Paper' && computerChoice == 'Scissors') {
        computerScore++;
        return "You lose! Paper beats Rock"
    } else if (humanChoice == 'Scissors' && computerChoice == 'Rock') {
        computerScore++;
        return "You lose! Paper beats Rock"
    } else if (humanChoice == 'Scissors' && computerChoice == 'Paper') {
        humanScore++;
        return "You win! Rock beats Scissors"
    }
}

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();
let computerScore = 0;
let humanScore = 0;

console.log(computerChoice);
console.log(humanChoice)
console.log(playRound(computerChoice, humanChoice))
console.log(`Computer Score: ${computerScore}, Human Score: ${humanScore}`)