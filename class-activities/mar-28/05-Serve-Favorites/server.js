var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

// Start our server
server.listen(PORT, function() {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:" + PORT);
});

// Create a function which handles incoming requests and sends responses
function handleRequest(req, res) {

  // Capture the url the request is made to
  var path = req.url;

  // Depending on the URL, display a different HTML file.
  switch (path) {

    case "/":
    return home(req, res);

    case "/index.html":
    return home(req, res);

    case "/foods.html":
    return foods(req, res);

    case "/movies.html":
    return movies(req, res);

    case "/frameworks.html":
    return frameworks(req, res);

    default:
    return display404(path, req, res);
    }
}

function home(req, res) {
    fs.readFile(__dirname + "/index.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function foods(req, res) {
    fs.readFile(__dirname + "/foods.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function movies(req, res) {
    fs.readFile(__dirname + "/movies.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function frameworks(req, res) {
    fs.readFile(__dirname + "/frameworks.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function display404(url, req, res) {
    var errorMessage = "<html>" +
        "<body><h1>404 Not Found </h1>" +
        "<p>The page you were looking for: " + url + " can not be found</p>" +
        "</body></html>";

  res.writeHead(404, { "Content-Type": "text/html" });

  res.end(errorMessage);
}
