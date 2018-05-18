var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var tries = 5;
var guesses = document.getElementById("failedGuess");
var guessesTried = ["_", ];

function makeRando() {Math.floor(Math.random() * letters.length)};
var rando = makeRando();
function randoLetter(i) {letters[i]};
function updateScore() {
    document.querySelector("#winCount").innerHTML = wins;
    document.querySelector("#lossCount").innerHTML = losses
};
function updateTries () {
    document.querySelector("#triesLeft").innerHTML = tries
};



var randoMcLetter = letters[rando];

updateScore();
updateTries();
randoLetter(rando);

document.onkeyup = function(event) {   
    var userGuess = event.key.toLowerCase();
    console.log(userGuess)
    if (letters.indexOf(userGuess) > -1) {
        if (userGuess === randoMcLetter) {
            wins++;
            alert("Correct!")
            updateScore();
            guessesTried.clear();
            tries = 5;
            rando++;
            document.querySelector("#failedGuess").innerHTML = " ";
        }

        else if (tries == 1) {
            alert("No tries remaining! You lose!");
            losses++;
            updateScore();
            tries = 5;
        }

        else {
            // decrease tries by 1 and updates tries remaining count.
            tries--;
            alert("Incorrect! Tries remaining: "+ tries);
            updateTries();
            // display keys pressed
            guessesTried.push(userGuess);
            for (var i=0; i < guesses.length; i++) {
                var userGuessP = document.createElement("p");
                userGuessP.textContent = guesses[i];
                guesses.appendChild(userGuessP);
            } ;
            
        };
    };
};