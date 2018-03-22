var User = require("./user");

var List = function() {
  this.listOfUsers = [];
  this.numberOfUsers = function() {
      return this.listOfUsers.length;
  }
  this.addUser = function(name, location, date) {
    this.listOfUsers.push(new User(name, location, date));
  };
};

module.exports = List;