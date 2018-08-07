// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function speak() {
  let name = "Alejandro";

  function sayName() {
    console.log("Hello, my name is  " + name);
  }
  sayName();
}
speak();

// ==== Challenge 2: Create a counter function ====
let i = 0;
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  i++;
  return i;
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

  return {
    increment: function() {
      i++;
      return i;
    },
    decrement: function() {
      i--;
      return i;
    }
  };
};
