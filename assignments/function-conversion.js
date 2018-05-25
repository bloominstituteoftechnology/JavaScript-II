// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {};
 let noParams=() => {return;}
 noParams();

// let anotherFunction = function (param) {
//   return param;
// };
let oneParam= param => {return param;}
oneParam();

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);
let twoParams= (param1, param2) => param1 + param2;
twoParams(1,2);

// let subtract = function (param1, param2) {
//  return param1 - param2;
// };
// subtract(1,2); //?
let subParams= (param1,param2) => param1 - param2;
subParams(1,2);

exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);
