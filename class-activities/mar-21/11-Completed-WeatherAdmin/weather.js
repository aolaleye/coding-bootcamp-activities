var List = require("./list");

var userList = new List();

var fs = require("fs");
var inquirer = require("inquirer");
var weather = require('weather-js');

var user = false;
var admin = false;

function userOrAdmin() {
    inquirer.prompt([
        {
            type: "input",
            message: "User or Admin?",
            name: "userOrAdmin"
        }
    ]).then(function(response) {
        if (response.userOrAdmin === "user") {
            user = true;
            if (user === true) {
                isUser();
            } 
        } else if (response.userOrAdmin === "admin") {
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
        message: "Location",
        name: "location"
      }
    ]).then(function(response) {
        userList.addUser(response.name, response.location, Date.now());

        logCommand();

        weather.find({ search: response.location, degreeType: "F" }, function(err, result) {

            if (err) {
              return console.log(err);
            }

            console.log(JSON.stringify(result, null, 2));
          
          });
    });
}

//if admin === true
function isAdmin() {
    showCommandLog();
}

// <--- appends commands to log.txt --->
function logCommand() {
    
    var newCommand = "\n" + "Name: " + userList.listOfUsers[0].name + ", Location: " + userList.listOfUsers[0].location + ", Date: " + userList.listOfUsers[0].date;

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

