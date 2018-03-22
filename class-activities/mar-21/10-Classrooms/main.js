var Class = require("./class.js");

var scienceClass = new Class(0, "Stewart", 101);

scienceClass.addStudent("Melissa", "English", 3.5);

// Checking to see who's in the movie now
console.log("Who's in the class?");
console.log(JSON.stringify(scienceClass.class, null, 2) + "\n");

// Adding more cast members to the movie
console.log("Adding new cast members...\n");
scienceClass.addStudent("John", "English", 3.2);
scienceClass.addStudent("Jacob", "Science", 3.0);
scienceClass.addStudent("Jerry", "Math", 3.6);

// Logging all of the movie's cast members
console.log("Who's in it now?");
console.log(JSON.stringify(scienceClass.class, null, 2) + "\n");

// Logging information about each cast member using their `readProfile` method
console.log("Can you tell me more about the cast?\n");
for (var i = 0; i < scienceClass.class.length; i++) {
  scienceClass.class[i].readProfile();
}

console.log("Number of Students in this class: " + scienceClass.numberOfStudents);