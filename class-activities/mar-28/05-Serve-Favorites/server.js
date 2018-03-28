var http = require("http");
var fs = require("fs");

var PORT = 8080;
var server = http.createServer(handleRequest);

server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});

function serveFile(path, responseObject) {
    fs.readFile(__dirname + path, function(err, data) {
        responseObject.writeHead(200, { "Content-Type": "text/html" });
        responseObject.end(data);
    });
} 

function handleRequest(req, res) {

    var path = req.url;

    switch (path) {

        case "/foods.html":
        case "/movies.html":
        case "/frameworks.html":
        return serveFile(path, res);

        default:
        return serveFile("/index.html", res);
        }
}

// function home(req, res) {
//     fs.readFile(__dirname + "/index.html", function(err, data) {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//     });
// }

// function foods(req, res) {
//     fs.readFile(__dirname + "/foods.html", function(err, data) {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//     });
// }

// function movies(req, res) {
//     fs.readFile(__dirname + "/movies.html", function(err, data) {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//     });
// }

// function frameworks(req, res) {
//     fs.readFile(__dirname + "/frameworks.html", function(err, data) {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//     });
// }ß
