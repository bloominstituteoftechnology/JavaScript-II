// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {};
let myFunction = () => "no params here";

myFunction(); //?

// let anotherFunction = function (param) {
//   return param;
// };
let anotherFunction = (param) => param;

const theTruth = true;
anotherFunction(theTruth); //?

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);
let add = (x, y) => x + y;

add(51, 52); //?

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2); //?
let subtract = (x, y) => x - y;

subtract(51, 52); //?


exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);

const triple = function(arr) {return arr.map((num) => num * 3)}; //?
console.log(triple(exampleArray));
triple(exampleArray); //?

// split this up from only using the exampleArray array ONLY
// that way, it's more usable for other arrays; otherwise, would've written it as:

// const triple2 = exampleArray.map((num) => num * 3); //?
// console.log(triple2);