var User = require("./user");

var List = function() {
  this.listOfUsers = [];
  this.addUser = function(name, location, date) {
    this.listOfUsers.push(new User(name, location, date));
  };
};

module.exports = List;