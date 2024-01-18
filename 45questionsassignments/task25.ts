//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

///• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
let PlayerGuess: string = 'green';
let AlienColor: string = 'green';

if (PlayerGuess === AlienColor) {
    console.log("Congratulations! You guessed the correct alien color.");
    console.log("You just earned 10 points!");
} else {
    console.log("Sorry, wrong guess. Better luck next time!");
}
let playerGuess: string = 'yellow';
let alienColor: string = 'green';

if (playerGuess === alienColor) {
    console.log("Congratulations! You guessed the correct alien color.");
    console.log("You just earned 10 points!");
} else {
    console.log("Sorry, wrong guess. Better luck next time!");
}

