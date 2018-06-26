// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {};
let myFunction = () => {}

// let anotherFunction = function (param) {
//   return param;
// };

let anotherFunction = (param) => { return param; }

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

let add = (param1, param2) => { return param1 + param2; }
eq(add(2,4), 6);

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2); 

let subtract =  (param1, param2) => { return param1 - param2; }
eq(subtract(3,8), -5);

let exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);

const triple = exampleArray.map( (num) => {
  return num * 3;
});

eq( JSON.stringify(triple), JSON.stringify([3,6,9,12]) );

// Testing
function eq (a, b) {
  if (a === b) {
    console.log(`%c Test Passed `, 'background: #222; color: lightgreen');
  } else {
    console.log(`%c Test Failed `, 'background: #222; color: red');
  }
}