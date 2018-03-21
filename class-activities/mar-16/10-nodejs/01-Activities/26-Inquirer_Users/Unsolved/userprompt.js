// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "What is your name?",
      name: "userName"
    },
    // Here we create a basic password-protected text prompt.
    {
      type: "password",
      message: "Set your password",
      name: "userPassword"
    },
    // Here we give the user a list to choose from.
    {
      type: "list",
      message: "What is your favorite season?",
      choices: ["Spring", "Winter", "Summer", "Fall"],
      name: "userSeason"
    },
    //checkbox
    {
      type: "checkbox",
      message: "Do you prefer coffee or tea?",
      choices: ["Coffee", "Tea"],
      name: "userPreference"
    },
    // Here we ask the user to confirm.
    {
      type: "confirm",
      message: "Are you sure those are your favorites:",
      name: "confirm",
      default: true
    },
    {
      type: "password",
      message: "Enter your password to reveal your message:",
      name: "confirmPassword"
    }
  ])
  .then(function(response) {
    // If the response confirms, we displays the response's username and pokemon from the answers.
    if (response.confirmPassword === response.userPassword) {
      console.log("\nCongrats " + response.userName);
      console.log("It is now " + response.userSeason + " time!\n");
      console.log("Time for " + response.userPreference.join(" and ") + "!\n");
    }
    else {
      console.log("\nSorry " + response.username + ", not able to process your favorite season.\n");
    }
  });