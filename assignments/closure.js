// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function moreNames(){
  let name = '';
  const newFunction = function(x) {
    name += x;
    return name;
  }
  return newFunction;
}
const returnNames = moreNames();
console.log(returnNames('pascale'));
console.log(returnNames('sean'));
console.log(returnNames('ingrid'));
// ==== Challenge 2: Create a counter function ====

function counter() {
let count = 0;
const myFunction = function() {
count++;
return count;
}
return myFunction;
}
const newCounter = counter()
  // Return a function that when invoked increments and returns a counter variable.

console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
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
