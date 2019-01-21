// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {};
let myFunction = () => {};

// let anotherFunction = function (param) {
//   return param;
// };
let anotherFunction = (param) => param;  // don't need brackets for just one param

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);
let add = (param1, param2) => {
  return param1 + param2   // use curly brackets + return for more multiline
};                         // overkill here, just for demo

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);
let subtract = (param1, param2) => param1 - param2;   // one liner  with no curly brackets

exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
const triple = exampleArray.map(el => el * 3);
console.log(triple);