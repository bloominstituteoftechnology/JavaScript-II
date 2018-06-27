// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let simple = () => {let x = 5};

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return () => ++count
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0
  let object = {increment: () => {return ++count}, decrement: () => {return --count}};
  // object.increment = () => {return ++count};
  // object.decrement = () => {return --count};
  return object;
  
};


let counterTest = counterFactory();
console.log(counterTest.increment())
console.log(counterTest.increment())
console.log(counterTest.increment())
console.log(counterTest.decrement())