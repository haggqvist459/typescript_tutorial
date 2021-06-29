"use strict";
var character = "Luigi";
var age = 30;
var isBlackBelt = false;
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log("circumference: ", circ(5));
//explicit types
var stringVariable;
var numberVariable;
var booleanVariable;
// works
stringVariable = "it's a string";
console.log("stringVariable: ", stringVariable);
// does not work
// stringVariable = 30
// Arrays
// it can be good to initialize the array as an empty one right away
var stringArray = [];
// to be able to do this on the next line of code if need be:
stringArray.push("it's a string");
stringArray.push("it's another string");
console.log("stringArray: ", stringArray);
// Union types
// open up parenthesis before intitialization
var unionTypeArray = [];
// now strings, numbers and booleans can be pushed to the array.
unionTypeArray.push("it's a string");
unionTypeArray.push(30);
unionTypeArray.push(true);
console.log("unionTypeArray: ", unionTypeArray);
// parenthesis only needed before arrays
var unionTypeVariable;
unionTypeVariable = "it's a string";
console.log("unionTypeVariable: ", unionTypeVariable);
unionTypeVariable = 30;
console.log("unionTypeVariable: ", unionTypeVariable);
unionTypeVariable = true;
console.log("unionTypeVariable: ", unionTypeVariable);
// objects
var objectVariable;
objectVariable = { name: 'Tim', skillz: 1337 };
console.log("objectVariable: ", objectVariable);
// arrays are actually objects so this can also be done
// objectVariable = []
var anotherObjectVariable;
anotherObjectVariable = { name: "Tim", skillz: 1337 };
console.log("anotherObjectVariable: ", anotherObjectVariable);
//Dynamic types 
var dynamicVariable = 30;
console.log("dynamicVariable: ", dynamicVariable);
dynamicVariable = "It's a string";
console.log("dynamicVariable: ", dynamicVariable);
dynamicVariable = true;
console.log("dynamicVariable: ", dynamicVariable);
var anyArray = [];
anyArray.push("It's a string");
anyArray.push(30);
anyArray.push(true);
console.log("anyArray: ", anyArray);
var dynamicObject;
dynamicObject = { name: "Tim", skillz: 1337 };
console.log("dynamicObject: ", dynamicObject);
dynamicObject = { name: 1337, skillz: "Tim" };
console.log("dynamicObject: ", dynamicObject);
