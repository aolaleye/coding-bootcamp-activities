var List = require("./list");

var userList = new List();

var fs = require("fs");
var inquirer = require("inquirer");
var weather = require('weather-js');
var moment = require("moment");

var user = false;
var admin = false;

function userOrAdmin() {
    inquirer.prompt([
        {
            type: "list",
            message: "User or Admin?",
            choices: ["User", "Admin"],
            name: "userOrAdmin"
        }
    ]).then(function(response) {
        if (response.userOrAdmin === "User") {
            user = true;
            if (user === true) {
                isUser();
            } 
        } else if (response.userOrAdmin === "Admin") {
            inquirer.prompt([
                {
                    type: "password",
                    message: "Enter Password for Access:",
                    name: "confirmPassword"
                }
            ]).then(function(response) {
                if (response.confirmPassword === "admin") {
                    admin = true;
                    console.log("\nAccess Granted.\n");
                    if (admin === true) {
                        isAdmin();
                    }
                }
                else {
                    console.log("\nIncorrect Password. Access Denied.\n");
                }
            });
        }
    });
}

//if user === true
function isUser() {
    inquirer.prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name"
      },
      {
        type: "input",
        message: "Location:",
        name: "location"
      }
    ]).then(function(response) {
        userList.addUser(response.name, response.location, Date.now());

        logCommand();

        weather.find({ search: response.location, degreeType: "F" }, function(err, result) {

            if (err) {
              return console.log(err);
            }

            console.log("--------------------------------------");
            console.log("City: " + result[0].location.name);
            console.log("Current Temperature (Fahrenheit): " + result[0].current.temperature);
            console.log("Forecast: " + result[0].current.skytext);
            console.log("--------------------------------------");
          
          });
    });
}

//if admin === true
function isAdmin() {
    inquirer.prompt([
    {
        type: "list",
        message: "What information are you requesting?",
        choices: ["Number of Users", "Complete User Information"],
        name: "requestedInfo"
    }
    ]).then(function(response) {
        if (response.requestedInfo === "Number of Users") {
            //figure out how to print the number of lines in log.txt
            //wc -l < log.txt;
            fs.readFile("log.txt", "utf-8", function(error, data) {
                if (error) {
                    return console.log(error);
                }
                var commandArray = data.split("\n"); 
                console.log(commandArray.length + " users have retrieved weather information.");
            });
        }
        else if (response.requestedInfo === "Complete User Information") {
            showCommandLog();
        }
  });
}

// <--- appends commands to log.txt --->
function logCommand() {
    
    var newCommand = "\n" + "Name: " + userList.listOfUsers[0].name + ", Location: " + userList.listOfUsers[0].location + ", Date: " + moment(userList.listOfUsers[0].date).format("MM-DD-YYYY");

    //appends command to log.txt
    fs.appendFile("log.txt", newCommand, function(err) {
        if (err) {
            console.log(err);
        }
        console.log("command was logged.")
    });

} //<--- end logCommand() function

function showCommandLog() {

    fs.readFile("log.txt", "utf-8", function(error, data) {
        // checks for error
        if (error) {
            return console.log(error);
        }
        
        //makes log.txt an array
        var commandArray = data.split("\n"); 
        
        // logs previous commands
        for (i = 0; i < commandArray.length; i++) {
            console.log(commandArray[i]);
        }
 
    });

} //<--- end showCommandLog() function


//run program
userOrAdmin();
