var secretNumber = 4;
var guess = Number(prompt('Guess a number'));
if(guess === secretNumber) alert('You guessed it right');
else if (guess > secretNumber) {
  alert('You are too high');
} else {
  alert('You are too low');
}
