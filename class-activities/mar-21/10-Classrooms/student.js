var Student = function(name, subject, gpa) {
    this.name = name;
    this.subject = subject;
    this.gpa = gpa;
    this.readProfile = function() {
        console.log(this.name + ", Favorite subject: " + this.subject + ", GPA: " + this.gpa);
    };
  };
  
module.exports = Student;