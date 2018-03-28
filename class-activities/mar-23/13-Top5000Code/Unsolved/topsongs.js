var mysql = require("mysql");
var command = process.argv[2];
var value = process.argv[3];
var value2 = process.argv[4];

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "topsongs_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

function artist() {
    connection.query("SELECT * FROM top5000 WHERE artist=?", [value], function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].position + " | " + "Song: " + res[i].song);
        }
        console.log("-----------------------------------");
    });

  connection.end();
}

function song() {
    connection.query("SELECT * FROM top5000 WHERE song=?", [value], function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].position + " | " + "Artist: " + res[i].artist + " | " + "Release Year: " + res[i].year);
        }
        console.log("-----------------------------------");
    });

  connection.end();
}

function popular() {
    connection.query("SELECT artist FROM top5000 GROUP BY artist HAVING count(*) > 1", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("Artist: " + res[i].artist);
        }
        console.log("-----------------------------------");
    });

  connection.end();
}

function range() {
    connection.query("SELECT position,song,artist,year FROM top5000 WHERE position BETWEEN ? AND ?", [value, value2], function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].position + " | " + "Song: " + res[i].song + " | " + "Artist: " + res[i].artist + " | " + "Release Year: " + res[i].year);
        }
        console.log("-----------------------------------");
    });

  connection.end();
}

switch (command) {
    case "artist":
    console.log("Searching artist...");
    artist();
    break;

    case "popular":
    console.log("Searching all popular artists...");
    popular();
    break;

    case "range":
    console.log("Searching all data in specified range...");
    range();
    break;

    case "song":
    console.log("Searching song...");
    song();
    break;
}



