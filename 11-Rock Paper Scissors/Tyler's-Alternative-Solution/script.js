let wins = 0;
let losses = 0;
let ties = 0;

const computerResponses = ['R', 'P', 'S'];

let playAgain = true;

while (playAgain) {
    const userResponse = prompt("Enter R, P, or S").toUpperCase();

    const compIndex = Math.floor(Math.random() * computerResponses.length);

    const compResponse = computerResponses[compIndex];

    alert("The Computer chose: " + compResponse);


    if (userResponse === compResponse) {
        ties++;
        alert("You tied!");
    }
    else if (
        (userResponse === 'R' && compResponse === 'S') ||
        (userResponse === 'P' && compResponse === 'R') ||
        (userResponse === 'S' && compResponse === 'P')
    ) {
        wins++;
        alert("You won!");
    }
    else {
        losses++;
        alert("You lost!");
    }

    alert("Ties: " + ties + "\nWins:  " + wins + "\nLosses: " + losses);

    playAgain = confirm("Do you want to playAgain");

}

