
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

let computerChoice = getComputerChoice();
console.log(computerChoice);