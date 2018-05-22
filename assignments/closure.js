// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function tellstheProduct(a, b) {
  function multiply(a, b) {
    return a * b;
  }
  return 'The product of these numbers is ' + multiply(a, b);
}


// ==== Challenge 2: Create a counter function ====
// Return a function that when invoked increments and returns a counter variable.
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const counter = () => {
  let count = 1;
  return function() {
    return count++
  }
   }
let newCounter = counter();
newCounter();


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.
const counterFactory = () => {
  let count = {
  increment: function() {
    count++;
  },
  decrement: function() {
    count--;
  }
}
  return count;
};
