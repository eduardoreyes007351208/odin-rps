/* globally initializes the score */
let cs = 0;
let hs = 0;
let goal = 5;
const resultsDiv = document.querySelector('#results');
const btns = document.querySelectorAll('.btns');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let computerChoice = getComputerChoice()
        let humanChoice = getHumanChoice(btn.id)
        textGeneration(computerChoice, humanChoice)
    })
})


/* ----------------------------- Functions  -----------------------------*/
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

    setTimeout(() => {
        checkGoal()
    }, 1);

    if (humanChoice == computerChoice) {
        return "Tie!\n"
    } else if (humanChoice == 'rock' && computerChoice == 'paper' || humanChoice == 'paper' && computerChoice == 'scissors' || humanChoice == 'scissors' && computerChoice == 'rock') {
        cs++;
        return `You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}\n`
    } else {
        hs++;
        return `You win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}\n`
    }
}

let textGeneration = (cc, hc) => {
    let result = playRound(cc, hc)

    const resultText = document.querySelector('#results')
    resultText.textContent = result

    const scoresText = document.querySelector('#scores')
    scoresText.textContent = `Score - Computer: ${cs} || Human: ${hs}`
}

let checkGoal = () => {
    if (hs >= goal) {
        const resultText = document.querySelector('#results')
        const scoresText = document.querySelector('#scores')

        resultText.textContent = `YOU WON THE GAME`
        resultText.setAttribute('style', 'color: green;')
        scoresText.textContent = `Final Score - Computer: ${cs} || Human: ${hs}`
    } else if (cs >= goal) {
        const resultText = document.querySelector('#results')
        const scoresText = document.querySelector('#scores')

        resultText.textContent = `YOU LOST THE GAME`
        resultText.setAttribute('style', 'color: red;')
        scoresText.textContent = `Final Score - Computer: ${cs} || Human: ${hs}`
    }
}