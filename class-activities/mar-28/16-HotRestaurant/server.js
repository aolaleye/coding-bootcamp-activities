// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

var tables = [];
var clear = false;

if(Array.isArray(tables) && tables.length){
    clear = true;
  }

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables?", function (req, res) {

    var selected = req.params.tables;

    console.log(selected);

    if (selected) {
        console.log(selected);

        return res.json(false);
    }

    return res.json(tables);

});

app.post("/api/tables", function(req, res) {

    var table = req.body;

    console.log(table);
  
    tables.push(table);
  
    res.json(table);

});    

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});  
