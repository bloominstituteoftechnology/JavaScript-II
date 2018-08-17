// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {};
let myFunction = () => {};
console.log(myFunction());    // undefined return value

// let anotherFunction = function (param) {
//   return param;
// };
let anotherFunction = (param) => {
    return param;
};
console.log(anotherFunction("Hi!"));   // returns Hi!

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);
let add = (param1, param2) => {
    return param1 + param2;
};
console.log(add(1, 2));   // Returns 3

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);
let subtract = (param1, param2) => {
    return param1 - param2;
};
console.log(subtract(5, 3));   // returns 2

exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);
const triple = exampleArray.map((num) => num * 3);
console.log(triple);   // returns [3, 6, 9, 12]

