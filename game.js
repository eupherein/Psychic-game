var possibleChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var yourGuesses = []
console.log(yourGuesses);


var wins = 0;
var losses = 0;
var guessesLeft = 13;

function letterGuess() {
    var computerChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
    console.log("Computer choice is " + computerChoice);
    return computerChoice;
}
function reset() {

    guessesLeft = 13;
    document.querySelector("#guessesLeft").innerHTML = guessesLeft;

    yourGuesses = [];
    document.querySelector("#myGuess").innerHTML = yourGuesses;
    computerChoice;
    var computerChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
    console.log("Computer choice is " + computerChoice)
    var userGuess;
    return computerChoice;
}

var computerChoice = letterGuess();

document.onkeyup = function () {
    var userGuess = event.key.toLowerCase();

    if (userGuess === computerChoice) {
        wins++;
        document.querySelector("#Wins").innerHTML = wins;
        console.log("Your guess " + userGuess)
        computerChoice = reset();
    }

    else {   //guesses
        if (guessesLeft > 1) {
            guessesLeft--;
            document.querySelector("#guessesLeft").innerHTML = guessesLeft;
            yourGuesses.push(userGuess)
            document.querySelector("#myGuess").innerHTML = yourGuesses;
        }

        else {
            losses++;
            document.querySelector("#losses").innerHTML = losses;
            computerChoice = reset();
        }

    }
}

