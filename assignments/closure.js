// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!


// ==== Challenge 2: Create a counter function ====
// Return a function that when invoked increments and returns a counter variable.
var uniqueInteger = (function() {
  var counter = 0;
  return function() { return counter++; }
}());

console.log( uniqueInteger())
console.log( uniqueInteger())
console.log( uniqueInteger())
console.log( uniqueInteger())
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  let counter = 0;
  console.log(counter);
  let increment = () => counter += 1;
  let decrement = () => counter -= 1;
  let resObj = {increment , decrement};
  
  return resObj;
  
};
  let foo = counterFactory();
  
  console.log(foo.decrement());
  console.log(foo.increment());
// Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
