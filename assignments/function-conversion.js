// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

let myFunction = a => {`a`;}

let anotherFunction = param => {
  `param;` //I sitll don't get this template literal stuff or what the hell is the point. Why are there a million ways of doing the same thing? 2 would suffice no?
};

let add = (param1, param2) => { return param1 + param2;};
add(1,2); 

let subtract = (param1, param2) => {return param1 - param2;
};
console.log(subtract(1,2)); 

exampleArray = [1,2,3,4];
const triple = exampleArray.map(num => num * 3);
console.log(triple);