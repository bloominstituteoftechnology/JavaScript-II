// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

/* Problem #1
let myFunction = function () {}; */

let myFunciton = () => {};


/* Problem #2
let anotherFunction = function (param) {
  return param;
}; */

let anotherFunction = () => {
  return param;
}


/* Problem #3
let add = function (param1, param2) {
  return param1 + param2;
};
add(1,2); */

let add = (param1, param2) => {
  return param1 + param2;
};
add(1,2);


/* Problem #4
let subtract = function (param1, param2) {
  return param1 - param2;
};
subtract(1,2); */

let subtract = (param1, param2) => {
  return param1 - param2;
};
console.log(exampleArray = [1,2,3,4]);


/* Problem #5
const triple = exampleArray.map(function (num) {
  return num * 3;
}); */

const triple = exampleArray.map((num) => {
  return num * 3;
});
console.log(triple);