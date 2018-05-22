// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunctionES5 = function () {};

let myFunctionES6 = () => {};



let anotherFunctionES5 = function (param) {
  return param;
};

let anotherFunctionES6 = param => param;
console.log(anotherFunctionES5('test'));
console.log(anotherFunctionES6('test'));



let addES5 = function (param1, param2) {
  return param1 + param2;
};

let addES6 = (param1,param2) => param1 + param2;

console.log(addES5(1,3))
console.log(addES6(1,3))



let subtractES5 = function (param1, param2) {
  return param1 - param2;
};
let subtractES6 = (param1,param2) => param1 - param2;
console.log(subtractES5(1,2))
console.log(subtractES6(1,2))




exampleArray = [1,2,3,4];
const tripleES5 = exampleArray.map(function (num) {
  return num * 3;
});

const tripleES6 = exampleArray.map(num => num*3)
console.log(tripleES5);
console.log(tripleES6);