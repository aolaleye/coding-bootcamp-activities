var Student = require("./student");

var Class = function(professorName, roomNumber) {
  // this.cast will hold all of our CastMember objects
  this.class = [];
  this.numberOfStudents = function() {
      return this.class.length;
  }
  this.professorName = professorName;
  this.roomNumber = roomNumber;
  this.addStudent = function(name, subject, gpa) {
    this.class.push(new Student(name, subject, gpa));
  };
};

module.exports = Class;