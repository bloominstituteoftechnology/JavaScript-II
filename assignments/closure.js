// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
var globalscope = "I can be dragged into any function!";
function saysomething () {return globalscope};
saysomething();
// ==== Challenge 2: Create a counter function ====
var countervariable=0;
const counter = () => {
  countervariable+=1;
};

counter();
counter();
console.log(countervariable);
// Return a function that when invoked increments and returns a counter variable.
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
