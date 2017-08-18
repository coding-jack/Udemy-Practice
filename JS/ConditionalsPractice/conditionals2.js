var secretNumber = 4;
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

if (guess === secretNumber) {
  alert("You got it right!");
}

else if (guess > secretNumber) {
  alert("Too High, guess again!");
}

else {
  alert("Too Low, Guess Again!");
}
