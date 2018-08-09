// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const closureContainer = () => {
  variableOne = 'Closure';
  variableTwo = 'Is Cool';
  return closure = () => {return `${variableOne} ${variableTwo}`;}
}
const closureVariable = closureContainer();
console.log(closureVariable())


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let zero = 0;
  // Return a function that when invoked increments and returns a counter variable.
  return increment = () => {return ++zero}
};
const newCounter = counter();
// Example usage: const newCounter = counter();
console.log(newCounter());
console.log(newCounter());

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};