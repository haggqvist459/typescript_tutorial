let character = "Luigi";
let age = 30;
let isBlackBelt = false;

const circ = (diameter: number) => {
    return diameter * Math.PI;
} 

console.log("circumference: ", circ(5));


//explicit types
let stringVariable: string;
let numberVariable: number;
let booleanVariable: boolean;

// works
stringVariable = "it's a string"
console.log("stringVariable: ", stringVariable);
// does not work
// stringVariable = 30


// Arrays

// it can be good to initialize the array as an empty one right away
let stringArray: string[] = [];
// to be able to do this on the next line of code if need be:
stringArray.push("it's a string");
stringArray.push("it's another string");
console.log("stringArray: ", stringArray);

// Union types

// open up parenthesis before intitialization
let unionTypeArray: (string|number|boolean)[] = [];

// now strings, numbers and booleans can be pushed to the array.
unionTypeArray.push("it's a string");
unionTypeArray.push(30);
unionTypeArray.push(true);
console.log("unionTypeArray: ", unionTypeArray);

// parenthesis only needed before arrays
let unionTypeVariable: string|number|boolean;
unionTypeVariable = "it's a string";
console.log("unionTypeVariable: ", unionTypeVariable);
unionTypeVariable = 30;
console.log("unionTypeVariable: ", unionTypeVariable);
unionTypeVariable = true;
console.log("unionTypeVariable: ", unionTypeVariable);

// objects
let objectVariable: object;
objectVariable = { name: 'Tim', skillz: 1337 };
console.log("objectVariable: ", objectVariable);
// arrays are actually objects so this can also be done
// objectVariable = []

let anotherObjectVariable : {
    name: string,
    skillz: number
}

anotherObjectVariable = { name: "Tim", skillz: 1337 };
console.log("anotherObjectVariable: ", anotherObjectVariable);

//Dynamic types 

let dynamicVariable: any = 30;
console.log("dynamicVariable: ", dynamicVariable);
dynamicVariable = "It's a string";
console.log("dynamicVariable: ", dynamicVariable);
dynamicVariable = true;
console.log("dynamicVariable: ", dynamicVariable);

let anyArray: any[] = [];
anyArray.push("It's a string");
anyArray.push(30);
anyArray.push(true);
console.log("anyArray: ", anyArray);

let dynamicObject: {
    name: any,
    skillz: any
}

dynamicObject = { name: "Tim", skillz: 1337 };
console.log("dynamicObject: ", dynamicObject);
dynamicObject = { name: 1337, skillz: "Tim" };
console.log("dynamicObject: ", dynamicObject);