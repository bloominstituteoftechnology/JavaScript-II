// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {};

let anotherFunction = param => param;

console.log(anotherFunction('test'));


let add = (param1, param2) => (param1 + param2);
console.log(add(2 , 8));
//   return param1 + param2;
// };
// add(1,2);

let subtract = (param1, param2) => (param1 - param2);
console.log(subtract(17, 2));
//   return param1 - param2;
// };
// subtract(1,2); //?

exampleArray = [1,2,3,4];
const triple = exampleArray.map((num) => (num*3));
console.log(triple);
