//declare variables - array with options, number of wins, losses, draw, game playing
let validOptions = ["R", "P", "S"];
var playerWins = 0;
var playerDraws = 0;
var playerLosses = 0;
var continueGame = true;

while (continueGame) {
    //ask user for input (rp or s)
    //validate user input - if bad, loop back
    var validInput = false;
    while (!validInput) {
        var playerInput = window.prompt("Please enter R, P or S.");
        if (validOptions.includes(playerInput)) {
            validInput = true;
        }
        else {
            window.alert("Invalid input - please enter R, P or S");
        }
    }

    //generate computer choice
    var computerRand = Math.floor(Math.random() * validOptions.length);
    var computerChoice = validOptions[computerRand];

    //determine outcome
    var outcome;
    switch (playerInput) {
        case "R":
            switch (computerChoice) {
                case "R":
                    outcome = "Draw";
                    break;
                case "S":
                    outcome = "Win";
                    break;
                case "P":
                    outcome = "Lose";
                    break;
            }
            break;
        case "S":
            switch (computerChoice) {
                case "R":
                    outcome = "Lose";
                    break;
                case "S":
                    outcome = "Draw";
                    break;
                case "P":
                    outcome = "Win";
                    break;
            }
            break;
        case "P":
            switch (computerChoice) {
                case "R":
                    outcome = "Win";
                    break;
                case "S":
                    outcome = "Lose";
                    break;
                case "P":
                    outcome = "Draw";
                    break;
            }
            break;
    }

    //record outcome
    switch (outcome) {
        case "Win":
            playerWins = playerWins + 1;
            break;
        case "Lose":
            playerLosses = playerLosses + 1;
            break;
        case "Draw":
            playerDraws = playerDraws + 1;
            break;
    }

    //display outcome and previous record
    window.alert(outcome + "!" + "\nPlayer Record: " + playerWins + " wins, " + playerLosses + " losses, " + playerDraws + " draws");

    //prompt user to play again
    continueGame = window.confirm("Play again?");
    //if yes  loop back
}
