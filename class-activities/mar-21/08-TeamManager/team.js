var inquirer = require("inquirer");

function Player(name, position, offense, defense) {
  this.name = name;
  this.position = position;
  this.offense = offense;
  this.defense = defense;
  this.goodGame = function() {
    if (Math.floor(Math.random() * 2) === 0) {
        this.offense++;
    }
  };
  this.badGame = function() {
    if (Math.floor(Math.random() * 2) === 0) {
        this.offense--;
    }
  };
  this.printStats = function() {
    console.log("Name: " + this.name + "\nPosition: " + this.position +
    "\nOffense: " + this.offense + "\nDefense: " + this.defense);
  };
}

var count = 0;

var teamArray = [];

var addPlayer = function() {

    if (count < 3) {
        console.log("New Player Added!");

        inquirer.prompt([
        {
          name: "name",
          message: "What is your name?"
        }, {
          name: "position",
          message: "What's your position?"
        }, {
          name: "offense",
          message: "What's your offensive ability?"
        }, {
          name: "defense",
          message: "What's your defensive ability?"
        }
      ]).then(function(answers) {

        var newPlayer = new Player(
          answers.name,
          answers.position,
          answers.offense,
          answers.defense);

        newPlayer.printStats();

        teamArray.push(newPlayer);
        
        count++;
   
        addPlayer();
      });
    }
    else {
        for (i = 0; i < teamArray.length; i++) {
            teamArray[i].printInfo();
        }
    }
};

addPlayer();

// var randomNumber = function getRandomNumber(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function playGame() {
//     for(i = 0; i < 6; i++) {
//         var firstNumber = randomNumber(1,20);
//         var secondNumber = randomNumber(1,20);

//         if (firstNumber < ) {

//         } else if (secondNumber > ) {

//         }

//     }
// }
