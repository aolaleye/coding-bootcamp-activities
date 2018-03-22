var Student = require("./student");

var Class = function(numberOfStudents, professorName, roomNumber) {
  // this.cast will hold all of our CastMember objects
  this.class = [];
  this.numberOfStudents = numberOfStudents;
  this.professorName = professorName;
  this.roomNumber = roomNumber;
  this.addStudent = function(name, subject, gpa) {
    this.class.push(new Student(name, subject, gpa));
    this.numberOfStudents += 1;
  };
};

module.exports = Class;