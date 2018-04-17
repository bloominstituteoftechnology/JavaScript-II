// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!


// ==== Challenge 2: Create a counter function ====
let counter = (() => {
  let count = 0;
  return () => {return count += 1};
})();
  // Return a function that when invoked increments and returns a counter variable.

counter();
counter();
counter();
counter();
console.log(counter());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = (() => {
  let count = 0;
  return {
    increment: function() {
      return count++;
    },
    decrement: function() {
      return count--;
    },
  }
})();

counterFactory.increment();
counterFactory.increment();
counterFactory.decrement();
console.log(counterFactory.decrement());
