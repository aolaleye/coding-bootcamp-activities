__ES6__
* ecma script 6
* we call it javascript
* _or es2015_ because it was developed in 2015

__const__
* stands for constant
* used to describe a variable that does not change its value
* if const ANSWER = 42 --> ANSWER will __always__ equal 42
* often defined in all-caps as a reminder that it cannot be changed
* HOWEVER:
    * if const is set to an array, it can be modified
    * i.e. const PETS = ["Dog", "Cat", "Endangered Sea Turtles"];
        * PETS.push("Dog");

__let__
* used to declare variables which will change
* works simillarly to var
* only difference involves scoping

__block level scoping__
function letTest1() {
    const x = 1;
    if (true) {
        const x = 2; //different variable from above
        console.log(x); // --> 2
    }
    console.log(x); // --> 1
}
* block level scoping also works with let

__template literals__
* use back ticks for string concatenation
_instead of:_
* "classmate + ate + tacoCount + tacos"
_do_
* `${classmate} ate ${tacoCount} tacos.`
* __can also span on two lines:__
* alert(`That's a lot of tacos, ${classmate}.
Taco 'Bout Hungry!`);

