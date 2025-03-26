/* the function definition for getComputerChoice, which randomly generates computer choice */
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

/* the function definition for getHumanChoice, which retrieves human choice */
let getHumanChoice = (selection) => {
    let answer = selection;

    return answer;
}

/* The function definition for playRound, which plays a round of rock, paper, scissors */
let playRound = (computerChoice, humanChoice) => {
    if (humanChoice == computerChoice) {
        return "Tie!\n"
    } else if (humanChoice == 'rock' && computerChoice == 'paper') {
        cs++;
        return "You lose! Paper beats Rock\n"
    } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        hs++;
        return "You win! Rock beats Scissors\n"
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        hs++;
        return "You win! Paper beats Rock\n"
    }  else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        cs++;
        return "You lose! Scissors beats Paper\n"
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        cs++;
        return 
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        hs++;
        return "You win! Scissors beats Paper\n"
    }
}

/* the function definition for playGame, which plays the game for 5 rounds */
/* let playGame = () => {

    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice().toLowerCase();
        let humanChoice = getHumanChoice().toLocaleLowerCase();
        console.log(`Round ${i+1}:\nComputer Choice: ${computerChoice}\nYour Choice: ${humanChoice}\n`,playRound(computerChoice, humanChoice),`Computer Score: ${cs}\nHuman Score: ${hs}`)
    }

    if (hs > cs) {
        console.log(`You won the game!\nFinal Score:\nComputer: ${cs}\nYou: ${hs}`)
    } else if (cs > hs) {
        console.log(`You lost the game!\nFinal Score:\nComputer: ${cs}\nYou: ${hs}`)
    } else {
        console.log(`Tie Game!\nFinal Score:\nComputer: ${cs}\nYou: ${hs}`)
    }
} */

/* globally initializes the score */
let cs = 0;
let hs = 0;
/* function call to start the game */
/* playGame(); */

const rockBtn = document.querySelector('#rock')
rockBtn.addEventListener('click', function(e) {
    let computerChoice = getComputerChoice()
    let humanChoice = getHumanChoice(rockBtn.id)
    
    let result = playRound(computerChoice, humanChoice)
    console.log(computerChoice, humanChoice, result)
})