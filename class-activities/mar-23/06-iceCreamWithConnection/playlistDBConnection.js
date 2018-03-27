var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "playlist_db"
});

connection.connect(function(error) {
  if (error) throw error;
  console.log("connected as id " + connection.threadId);

  connection.query("SELECT * FROM playlist_db.playlist", function(error, response) {
    if(error) throw error;
    console.log(response);
    connection.end();
  });

});