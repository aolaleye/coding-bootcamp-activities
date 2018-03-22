var User = function(name, location, date) {
    this.name = name;
    this.location = location;
    this.date = date;
    this.userInfo = function() {
        console.log("Name: " + this.name + ", Location: " + this.location + ", Date: " + this.date);
    };
  };
  
module.exports = User;