var Class = require("./class.js");

var scienceClass = new Class("Stewart", 101);

scienceClass.addStudent("Melissa", "English", 3.5);

console.log("Who's in the class?");
console.log(JSON.stringify(scienceClass.class, null, 2) + "\n");

console.log("Adding new class members...\n");
scienceClass.addStudent("John", "English", 3.2);
scienceClass.addStudent("Jacob", "Science", 3.0);
scienceClass.addStudent("Jerry", "Math", 3.6);

console.log("Who's in it now?");
console.log(JSON.stringify(scienceClass.class, null, 2) + "\n");

console.log("Can you tell me more about the class?\n");
for (var i = 0; i < scienceClass.class.length; i++) {
  scienceClass.class[i].readProfile();
}

console.log("Number of Students in this class: " + scienceClass.numberOfStudents);

scienceClass.addStudent("Sam", "History", 3.7);
console.log("Number of Students in this class: " + scienceClass.numberOfStudents);