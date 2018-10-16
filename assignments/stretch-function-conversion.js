// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

let myFunction = () => {

};

let anotherFunction = (param) => {
  return param;
};
console.log(anotherFunction('Killing it'))

let add = (param1, param2) => {
  return param1 + param2;
};
add(1,2);
console.log(add(1,3))

let subtract = (param1, param2) => {
  return param1 - param2;
};
subtract(1,2);
console.log(subtract(10,5))

exampleArray = [1,2,3,4];
const triple = exampleArray.map((num) => {
  return num * 3;
});
console.log(triple);