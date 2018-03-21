// var dogs = {
//     raining: true,
//     noise: "Woof!",
//     makeNoise: function() {
//         if (this.raining === true) {
//             console.log(this.noise);
//         }
//     }
// }

// var cats = {
//     raining: false,
//     noise: "Meow!",
//     makeNoise: function() {
//         if (this.raining === true) {
//             console.log(this.noise);
//         }
//     }
// }

// <--- or use constructor function: --->
//start constructor functions with a capital letter to signal that it is a special function
function Animal(raining, noise) {
    this.raining = raining;
    this.nosie = nosie;
    this.makeNoise = function() {
        if (this.raining === true) {
            console.log(this.noise);
        }
    }
}

var dog = new Animal(true, "Woof!");
var cats = new Animal(false, "Meow!");

dogs.makeNoise();
cats.makeNoise();

function massHysteria(dogs, cats) {
    if (dogs.raining === true && cats.raining === true) {
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
    }
}
massHysteria(dogs, cats);