
var fs = require("fs");

fs.readFile("Unsolved/best_things_ever.txt", "utf-8", function(error, data) {

    if (error) {
        return console.log(error);
    }

    var output = data.split(", ");    

    for (i = 0; i < output.length; i++) {
        console.log(output[i]);
    }

});