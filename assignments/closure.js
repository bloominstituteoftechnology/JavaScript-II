// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let myFirstName = "Chris";
let myLastName = "Kleist";
function myFullName(){
  console.log(`${myFirstName} ${myLastName}`)
}
myFullName();


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let myCount = 0;
  return function (){return ++myCount;}
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
newCounter();
console.log(newCounter());

//Alternative solution
const alternativeCounter = (function(){let hiddenCounter = 0; return function (){return ++hiddenCounter;}})();
//The above line sets alternativeCounter to the return value of a self invoking function that creates a local counter variable and returns a nested function

alternativeCounter();
alternativeCounter();
alternativeCounter();
console.log(alternativeCounter());


/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
