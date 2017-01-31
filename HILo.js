// Purpose: pick a random number between 0 and 100
// Signature: () -> integer
// Examples: getRandomInt() -> 17 (a random number)



function hiLoGame() {
var randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);
var guess = prompt("Guess a number between 0 & 100");
while (randomNum !== parseInt(guess)){


  if ( parseInt(guess) < randomNum ) {
    guess = prompt("Guess again, too low!");
  }

  else {
    guess = prompt("Guess again, too high!");
  }
}
alert("You win!");
}
