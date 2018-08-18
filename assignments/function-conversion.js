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
var myFunction = function myFunction() {};
var anotherFunction = function anotherFunction(param) {};
var add = function add(param1, param2) {
  return param1 + param2;
};
add(1, 2);
var subtract = function subtract(param1, param2) {
  return param1 - param2;
};
subtract(1, 2);
exampleArray = [1, 2, 3, 4];
var triple = exampleArray.map(function (num) {
  return num * 3;
});
console.log(triple);