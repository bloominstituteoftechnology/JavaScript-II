

// Take the commented ES5 syntax and convert it to ES6 arrow Syntax
// ES5
// var multiplyES5 = function(x, y) {
//     return x * y;
//   };

//   // ES6
//   const multiplyES6 = (x, y) => { return x * y };



// let myFunction = function () {};
const myFunction = () => {};

// let anotherFunction = function (param) {
//   return param;
// };
const anotherFunction = (param) => { return param };

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);
const add = (param1, param2) =>  param1 + param2 ;
console.log(add(16,20));


// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2); 
const subtract = (param1, param2) => param1 - param2 ;
console.log(subtract(120,10));

exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);
const triple = exampleArray.map(num => num * 3);

console.log(triple);


// const prices = smartPhones.map(smartPhone => smartPhone.price);
// console.log(prices); // [649, 576, 489]