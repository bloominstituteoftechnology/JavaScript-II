// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {};
let myFunction = () => null;
myFunction();

// let anotherFunction = function (param) {
//   return param;
// };
let anotherFunction = (param = "parameters") => param;
anotherFunction();

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);
let add = (a,b) => a + b;
add(3,4);

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);
let subtract = (a,b) => a-b;
subtract(8, 4);

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);
exampleArray = [1,2,3,4]
const triple = (arr) => {
  return arr.map(num => num *3);
};
triple(exampleArray);
