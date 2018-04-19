// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {};

// let anotherFunction = function (param) {
//   return param;
// };

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);

let myFunction = () => {};

let anotherFunction = (param) => param;

let add = (param, param2) => {return param + param2}; // Using the return statement in arrow syntax

add(1,2);

let substract = (param1, param2) => param1 - param2;

exampleArray = [1,2,3,4];
const triple = exampleArray.map((num) => {
  return num * 3;
});

console.log(triple);
