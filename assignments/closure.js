// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let counter = 0;
  return () => console.log(++counter);
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

const newCounter = counter();
newCounter();
newCounter();
newCounter();

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 0;
  return {
    increment: function() {
      console.log(++counter);
    },
    decrement: function() {
      console.log(--counter);
    }
  }
};

console.log("\n");

const newerCounter = counterFactory();

for (let i = 0; i < 10; i++)
  newerCounter.increment();

for (let i = 0; i < 3; i++)
  newerCounter.decrement();

for (let i = 0; i < 3; i++)
  newerCounter.increment();

for (let i = 0; i < 10; i++)
  newerCounter.decrement();
