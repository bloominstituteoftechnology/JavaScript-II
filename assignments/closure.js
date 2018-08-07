// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0
  return function (){
    ++count
    return count
  }
};
let cool = counter()
console.log(cool)
console.log(cool)
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counter2 = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0
  return {
    up: function plus(){
      return ++count
    },
    down: function minus(){
      return --count
    }
  }
};
let decide = counter2();
console.log(decide.up());
console.log(decide.down());
