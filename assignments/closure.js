// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function numberGenerator() {
  let num = 1;
  function checkNum() {
    console.log(num);
  }
  num += 1;
  return checkNum;
}

// ==== Challenge 2: Create a counter function ====
const counter = (count => {
  // Return a function that when invoked increments and returns a counter variable.
  return function() {
    count += 1;
    return count;
  }
})(0);
const newCounter = counter();
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
