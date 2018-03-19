var fs = require("fs");

var action = process.argv[2];
var number = parseFloat(process.argv[3]);

function deposit() {
    fs.appendFile("bank.txt", ", " + number, function(err) {

        // If an error was experienced we say it.
        if (err) {
            console.log(err);
        }
  
    });
}

function withdraw() {
    fs.appendFile("bank.txt", ", -" + number, function(err) {
    
        // If an error was experienced we say it.
        if (err) {
          console.log(err);
        }
      
    });
}

function total() {
fs.readFile("bank.txt", "utf-8", function(error, data) {

    if (error) {
        return console.log(error);
    }

    var total = 0;

    var output = data.split(", ");    

    for (i = 0; i < output.length; i++) {
        total += parseFloat(output[i]);
    }

    console.log("Total: " + total.toFixed(2));

});

}

if (action === "total") {
    total();
} else if (action === "deposit") {
    total();
    deposit();
    total += number;
} else if (action === "withdraw") {
    total();
    withdraw();
    total -= number;
}