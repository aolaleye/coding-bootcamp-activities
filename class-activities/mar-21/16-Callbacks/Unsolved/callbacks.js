var fs = require("fs");

// Write a function that logs a message, then executes
// a function argument.
function writeMessage(message) {
    console.log(message);
}

// Write a function that runs a function argument if
// its other argument is truthy.
function truthy(yes, go) {
    if(yes === true) {
        go;
    }
}

// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.
// This isn't as hard as it sounds!

// Use fs.writeFile to log a message to a file called
// log.txt. Are yo uusing callbacks anywhere? Where?
