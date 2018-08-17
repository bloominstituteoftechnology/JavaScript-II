// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {};
const myFunction = () => {console.log("Testing myFunction");};
myFunction();

// let anotherFunction = function (param) {
//   return param;
// };

const anotherFunction = (param) => {console.log("anotherFunction with a(n) "+param);};
anotherFunction();

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

const addFunction = (num1,num2) => {
	console.log(num1+num2);
	return num1+num2;
};

addFunction(1,2);

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

const subtract = (num1,num2) => {
	console.log(num1-num2);
	return num1-num2;
};

subtract(1,2);

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);

let exArr = [1,2,3,4,5,6,7];
const Cube = (num,arr) => {
	console.log(arr.map(function(num){
		return num * 3;
	}));
};

Cube(2,exArr);

