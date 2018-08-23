// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function subtract(x,y) {
  return `This is a subtraction closure. Be amazed! The answer is ${x - y}.`
}

// ==== Challenge 2: Create a counter function ====
let upOne = 0;
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  return ++upOne;

};
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
