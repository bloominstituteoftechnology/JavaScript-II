// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {};
let myFunction = () => {}

// let anotherFunction = function (param) {
//   return param;
// };
let anotherFunction = (params) => params
console.log(anotherFunction("hello world!"));
// let add = function (param1, param2) {
//   return param1 + param2;
// };
let add = (x, y) => x + y
console.log(add(5,2));

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
let subtract = (x, y) => x - y
console.log(subtract(54,12));
// subtract(1,2);

// exampleArray = [1,2,3,4];
const triple = x => x * 3
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
console.log(triple(6));
// console.log(triple);
