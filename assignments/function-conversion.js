// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

let myFunction = () => {};

// we could also include curly braces and the return keyword, but here i omitted it 
let anotherFunction = (param) => param;

let add = (param1, param2) => param1 + param2;
console.log(add(1,2)); // 3

let subtract = (param1, param2) => param1 - param2;
console.log(subtract(1,2)); // -1

exampleArray = [1,2,3,4];
const triple = exampleArray.map((num) => num * 3;
console.log(triple); // [3, 6, 9, 12]