function DigitalPal() {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.feed = function() {
        if (this.hungry === true) {
            console.log("That was yummy!");
            this.hungry = false;
        } else {
            console.log("No thanks! I'm full.");
        }
    };
    this.sleep = function() {
        if (this.sleepy === true) {
            console.log("Zzzzzzzz");
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        } else {
            console.log("No way! I'm not tired.");
        }
    };
    this.play = function() {
        if (this.bored === true) {
            console.log("Yay! Let's play!");
            this.bored = false;
            this.hungry = true;
        } else {
            console.log("No right now. Later?");
        }
    };
    this.increaseAge = function() {
        this.age += 1;
        console.log("Happy Birthday to me! I am" + this.age + "old!");
    };
}

var animals = {};

animals.dog = new DigitalPal();

animals.dog.outside = false;
animals.dog.bark = function(){
    console.log("Woof! Woof!");
};
animals.dog.goOutside = function(){
    if (this.outside === false) {
        console.log("Yay! I love the outdoors!");
        this.outside = true;
        this.bark();
    } else {
        console.log("We're already outside though...");
    }
};
animals.dog.goInside = function(){
    if (this.outside === true) {
        console.log("Do we have to? Fine...");
        this.outside = false;
    } else {
        console.log("I'm already inside...");
    }
}


animals.cat = new DigitalPal();

animals.cat.houseCondition = 100;
animals.cat.meow = function(){
    console.log("Meow! Meow!");
};
animals.cat.destroyFurniture = function(){
    if (houseCondition - 10 > 0) {
        this.houseCondition -= 10;
        console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
        this.bored = false;
        this.sleepy = true;
    }
};
animals.cat.buyNewFurniture = function(){
    this.houseCondition += 50;
    console.log("Are you sure about that?");
}

// // run program
// animals.dog.bark();
// animals.cat.meow();

var animal = process.argv[2];
var method = process.argv[3];

animals[animal][method]();