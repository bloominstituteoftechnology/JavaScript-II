// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function closingTime() {
  time = '8:00pm';
  function logClosing() {
   return time;
  }
  //console.log(logClosing());
}
//console.log(closingTime());

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  return () => count += 1;
  // Return a function that when invoked increments and returns a counter variable.
};

// Example usage: 
// const newCounter = counter();
// console.log(newCounter());
// console.log(newCounter());
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count = 0;
  let counter = {
    increment: () => {return count += 1},
    decrement: () => {return count -= 1}
  }
  return counter;
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

const counterObj = counterFactory() // count === Object
console.log(counterObj.increment()) // 1
console.log(counterObj.increment()) // 2
console.log(counterObj.decrement()) // 1
