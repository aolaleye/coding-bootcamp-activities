
var printBands = require("./bands.js");

var genre; 

if (process.argv[2]) {
    genre = process.argv[2];
}

for (var key in printBands) {

    if (key === genre || genre === undefined) {
        console.log("A " + key + " band is " + printBands[key] + ".");
    }
    
}