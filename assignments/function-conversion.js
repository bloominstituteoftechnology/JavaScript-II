// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let noParams = function () {};
let noParams = () => {return 'With no params, I need () and {} and a return statement'};

// let oneParam = function (param) {
//   return param;
// };
let oneParam = param => {return 'With one param, () are optional, but needs a return'};

// let multiParams = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);
let multiParams = (param1, param2) => param1 + param2;
// NOTE: above^ Curly brackets aren’t required (break code!?) if only one expression is present.

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
let subtract = (param1, param2) => param1 - param2;
// console.log(subtract(1,2));

exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });

////IS BELOW CORRECT ??
const triple = exampleArray.map(num => num*3) ;
// console.log(triple);