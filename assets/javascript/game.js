var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var tries = 5;

var randoMcLetter = letters[Math.floor(Math.random() * letters.length)];

var userGuess = event.key

if (letter.getID(userGuess) > -1) {
    if (userGuess === randoMcLetter) {
        wins++
    }

    else if (tries == 0) {
        losses++
    }

    else {
        // decrease tries by 1
        tries--
        // display keys pressed
    }
}