var mysql = require("mysql");
var command = process.argv[2];

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "playlistDB"
});

connection.connect(function(error) {
  if (error) throw error;
  console.log("connected as id " + connection.threadId);

  if(command === "all") {
    connection.query("SELECT * FROM playlistDB.playlist", function(error, response) {
      if(error) throw error;
      console.log(response);
      connection.end();
    });
  } else {
    connection.query("SELECT * FROM playlistDB.playlist", function(error, response) {
      if(error) throw error;
      for (var i = 0; i < response.length; i++) {
        if (response[i].artist === command) {
          console.log(response[i]);
        } else if (response[i].genre === command) {
          console.log(response[i]);
        }
      }
      connection.end();
    });
  }

});

// console.log(query.sql);

// https://github.com/mysqljs/mysql#escaping-query-values