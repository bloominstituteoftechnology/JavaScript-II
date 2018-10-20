// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {};
let myFunction = () => {};

// let anotherFunction = function (param) {
//   return param;
// };
let anotherFunction = param => {
    return param;
};

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

let add = (param1, param2) => {
    return param1 + param2;
};
console.log(add(1, 2));

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);
let subtract = (param1, param2) => {
    return param1 - param2;
};
console.log(subtract(1, 2));

exampleArray = [2,6,5,9];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);
const triple = exampleArray.map(num => {
    return num * 3;
});

console.log(triple);

//IIFE
// (function () {
//     statements
// })();

const helloWorld = (function() {
    return `Hello World`;
})();

helloWorld;

const quadruple = (function() {
    exampleArray.map(num => {
        return num *4;
    });
})();

quadruple;
// I think it may be undefined, because when map creates a new array,
// it is inside the IIFE. Variables inside the IIFE cannot be accessed from the outside.
