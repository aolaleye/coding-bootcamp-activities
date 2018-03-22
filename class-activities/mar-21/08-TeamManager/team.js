var inquirer = require("inquirer");

var coinflip = function() {
    return Math.floor(Math.random() * 2);
}

function Player(name, position, offense, defense) {
  this.name = name;
  this.position = position;
  this.offense = offense;
  this.defense = defense;
  this.goodGame = function() {
    coinflip();
    if (coinflip === 1) {
        this.offense + 1;
    } else if (coinflip === 2) {
        this.defense + 1;
    }
  };
  this.badGame = function() {
    coinflip();
    if (coinflip === 1) {
        this.offense - 1;
    } else if (coinflip === 2) {
        this.defense - 1;
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
        console.log("New Player");

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

        newPlayer.printInfo();

        teamArray.push(newPlayer);
        
        count++;
   
        askQuestion();
      });
    }
    else {
        for (i = 0; x < teamArray.length; i++) {
            teamArray[i].printInfo();
        }
    }
};

addPlayer();

var randomNumber = function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playGame() {
    for(i = 0; i < 6; i++) {
        var firstNumber = randomNumber(1,20);
        var secondNumber = randomNumber(1,20);

        if (firstNumber < )

    }
}
