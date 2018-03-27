var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "",
    database: "greatbay_db"
  });

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    start();
});

function start() {
    inquirer.prompt([
        {
            type: "list",
            message: "Post Item or Bid Item?",
            choices: ["Post", "Bid"],
            name: "start"
        }
    ]).then(function(response) {
        if (response.start === "Post") {
            postAuction();
        } else if (response.start === "Bid") {
            bidAuction();
        }
    });
}

function postAuction() {
    inquirer.prompt([
        {
            type: "input",
            message: "What would you like to sell?",
            name: "itemName"
        },
        {
            type: "input",
            message: "What is the category of your item?",
            name: "category"
        },
        {
            type: "input",
            message: "What is your starting bid?",
            name: "startingBid",
            // validate:function(value) {
            //     if (isNAN(value) === false) {
            //         return true;
            //     } else {
            //         return false;
            //     }
            // } 
        }
    ]).then(function(response) {
        connection.query(
            "INSERT INTO auctions SET ?",
            {
              itemName: response.itemName,
              category: response.category,
              startingBid: response.startingBid,
              highestBid: response.startingBid
            },
            function(err, res) {
              console.log("Your item was added successfully");
              start();
            }
          );
    });
}

function bidAuction() {
    connection.query("SELECT * FROM auctions", function(err, res) {

        inquirer.prompt([
            {
            type: "list",
            message: "What item would you like to bid on?",
            name: "chosenItem",
            choices: function(value) {
                if (err) throw err;
                var choiceArray = [];
                for (i = 0; i < res.length; i++) {
                    choiceArray.push(res[i].itemName);
                }
                return choiceArray;
                }
            }
        ]).then(function(response) {
            for (i = 0; i < res.length; i++) {
                if (response.chosenItem === res[i].itemName) {
                    inquirer.prompt([
                        {
                        type: "input",
                        message: "What is your bid?",
                        name: "bid",
                        }
                    ]).then(function(response) {
                        if (parseInt(response.bid) > res[i].highestBid) {
                        connection.query("UPDATE playlist SET ? WHERE ?",
                            [
                                {
                                highestBid: response.bid
                                },
                                {
                                itemName: res[i].itemName
                                }
                            ],
                            function(err, res) {
                                console.log("You are now the highest bidder!");
                                start();
                            });
                        } else {
                            console.log("Sorry your bid is too low, try again");
                            start();
                        }
                    });
                }
            }
            
        });
        if (err) throw err;
    });
}

  