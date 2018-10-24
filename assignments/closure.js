// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const firstName = () => {
  const name = "Derek";

  const helloName = () => {
    return `Hello, ${name}!`;
  };

  return helloName;
};

let greeting = firstName();

greeting();


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return () => ++count;
};

const newCounter = counter();
newCounter();
newCounter();
newCounter();
newCounter();
newCounter();

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
