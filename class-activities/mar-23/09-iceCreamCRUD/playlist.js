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

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  createPlaylist();
});

function createPlaylist() {
  console.log("Inserting a new playlist...\n");
  var query = connection.query(
    "INSERT INTO playlist SET ?",
    {
      title: "Stone Cold",
      artist: "Demi Lovato",
      genre: "Pop"
    },
    function(err, res) {
      console.log(res.affectedRows + " playlist inserted!\n");
      // Call updatePlaylist AFTER the INSERT completes
      updatePlaylist();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

function updatePlaylist() {
  console.log("Updating Pop songs...\n");
  var query = connection.query(
    "UPDATE playlist SET ? WHERE ?",
    [
      {
        title: "Beat It"
      },
      {
        artist: "Michael Jackson"
      }
    ],
    function(err, res) {
      console.log(res.affectedRows + " playlists updated!\n");
      // Call deletePlaylist AFTER the UPDATE completes
      deletePlaylist();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

function deletePlaylist() {
  console.log("Deleting all songs from HAIM...\n");
  connection.query(
    "DELETE FROM playlist WHERE ?",
    {
      artist: "HAIM"
    },
    function(err, res) {
      console.log(res.affectedRows + " playlists deleted!\n");
      // Call readPlaylists AFTER the DELETE completes
      readPlaylist();
    }
  );
}

function readPlaylist() {
  console.log("Selecting all playlists...\n");
  connection.query("SELECT * FROM playlist", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}
