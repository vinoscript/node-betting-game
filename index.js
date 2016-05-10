
var prompt = require('sync-prompt').prompt;


var cash = 100;

function playGame(){

  while( cash > 5) {

    function getRandom() {
      return Math.floor(Math.random() * (10 - 1)) + 1;
      }

    var number = getRandom();

    console.log("Welcome to the betting game!");

      var bet_amount = parseInt(prompt("Enter bet amount (b/w 5-10): "));

      var guess = parseInt(prompt("Guess the number (b/w 1-10): "));

      if (guess == number){ 
        console.log("Success! The number was " + number); 
        console.log("You earned $" + bet_amount);
        cash += bet_amount;
      }

      else if ((guess + 1 == number) || (guess - 1 == number)){ 
        console.log("Meh! Close but not quite. The number was " + number); 
      }

      else {
        console.log("Fail! The number was " + number);
        console.log("You lost $" + bet_amount);
        cash -= bet_amount;
      }

      console.log("You currently have: $" + cash);

      number = getRandom();

  }

  console.log("You no longer have enough money to bet. Please leave the game now.");

}

playGame();


