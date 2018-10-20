// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let outer = 3;
function addition() {
  let inner = 2;
  return outer + inner;
}
console.log(addition());

// ==== Challenge 2: Create a counter function ====

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function() {
    count++
    console.log(count);
  }
};

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
  let count = 0;
  return {
    increment: function() {
      count++
      return count;
    }, 
    decrement: function() {
      count--;
      return count;
    }
  }
};

const newFactory = counterFactory();
console.log(newFactory.increment());
console.log(newFactory.increment());
console.log(newFactory.decrement());