var wins = 0;
var losses = 0;
var ties = 0;

var computerResponses = ['R', 'P', 'S'];

var playAgain = true;

while (playAgain) {
    var userResponse = prompt("Enter R, P, or S").toUpperCase();

    var compIndex = Math.floor(Math.random() * computerResponses.length);

    var compResponse = computerResponses[compIndex];

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

