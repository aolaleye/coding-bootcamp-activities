var mysql = require("mysql");

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

  connection.query("SELECT * FROM playlistDB.playlist", function(error, response) {
    if(error) throw error;
    console.log(response);
    connection.end();
  });

});