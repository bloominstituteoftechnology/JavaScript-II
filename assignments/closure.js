// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const closureContainer = () => {
  const variableOne = 'This variable is inside of closureContainer().';
  return closure = () => {return variableOne}
}
const closureVariable = closureContainer();
console.log(closureVariable())


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let zero = 0;
  // Return a function that when invoked increments and returns a counter variable.
  return increment = () => {return ++zero}
};

// Example usage: const newCounter = counter();

const newCounter = counter();

console.log(newCounter());
console.log(newCounter());

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let counter = 0;
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

  return {
    increment: () => {return ++counter},
    decrement: () => {return --counter}
  }
};
const newCounterFactory = counterFactory();

console.log(newCounterFactory.increment())
console.log(newCounterFactory.increment())
console.log(newCounterFactory.decrement())
console.log(newCounterFactory.decrement())