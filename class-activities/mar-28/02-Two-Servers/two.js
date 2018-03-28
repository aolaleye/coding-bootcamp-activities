var http = require("http");
var choice = process.argv[2];
var log;
var PORT = 7000;

var server = http.createServer(function(request, response) {
  response.end(log);
}); 

if (choice === "good") {
    PORT = 7000;
    log = "Here is something good about you";
} else if (choice === "bad") {
    PORT = 7500;
    log = "Here is something bad about you";
}


server.listen(PORT, function() {
  console.log("Server listening on http://localhost:" + PORT);
});
