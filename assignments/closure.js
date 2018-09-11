// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

var multiplyTo = function(passed) { // function
  var multiply = function(inner) { // function
    return passed * inner; // returns value
  };
  return multiply; // returns function itself
}

// multiplyTo(3); // 3 / inner. Closure 3.
var multiplyThree = new multiplyTo(3); // new variable
var multiplyFour = new multiplyTo(4); 

// Print
console.log(multiplyThree(1)); // 3 x 1
console.log(multiplyFour(2)); // 2 x 4

// ==== Challenge 2: Create a counter function ====
  // Return a function that when invoked increments and returns a counter variable.
const counter = () => {
  let counter = 0;
  let plusOne = function() {
  return ++counter;
}
  return plusOne;

}
const newCounter = counter();
newCounter();
newCounter();

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
