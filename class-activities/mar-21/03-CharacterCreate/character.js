function Character (name, profession, gender, age, strength, hitPoints) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitPoints = hitPoints;
    this.printStats = function() {
        console.log("Name: " + this.name + "\n" + "Profession: " + this.profession + "\n" + "Gender: " + this.gender + "\n" + "Age: " + this.age + "\n" + "Strength: " + this.strength + "\n" + "hitPoints: " + this.hitPoints + "\n" + "--------------------------\n");
    };
    this.isAlive = function() {
        if (hitPoints > 0) {
            console.log(this.name + " is still alive!");
        } else {
            console.log(this.name + " is dead.");
        }
    };
    this.attack = function(secondCharacter) {
        secondCharacter.hitPoints -= this.strength;
        console.log(this.name + " attacked " + secondCharacter.name + "\n" + secondCharacter.name + " hitPoints: " + secondCharacter.hitPoints+ "\n" + "--------------------------\n");
    };
    this.levelUp = function() {
        this.age += 1;
        this.strength += 5;
        this.hitPoints += 25;
        console.log(this.name + " leveled up! " + "\n" + "Age: " + this.age + "\n" + "Strength: " + this.strength + "\n" + "hitPoints: " + this.hitPoints + "\n" + "--------------------------\n");
    };
}

var character1 = new Character ("Ron", "Accountant", "Male", 35, 20, 40);
var character2 = new Character ("Jenny", "Doctor", "Female", 41, 30, 35);

character1.printStats();
character2.printStats();

character1.attack(character2);

character2.printStats();
character2.isAlive();

character2.levelUp();
character2.printStats();