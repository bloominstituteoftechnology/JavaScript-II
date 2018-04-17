// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function simpleClosure() {
  let name = 'lonne';
  function  intention() {
    console.log(`${name} is trying to understand closure!`);
  }
  intention();
}
simpleClosure();


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function() {
    count++
    return count;
  }
};

 const newCounter = counter();
 console.log(newCounter()); // 1
 console.log(newCounter()); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let counter = 0;

  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  return {
    increment: function() {
      counter++
  },

    decrement: function() {
      counter--
    }
  };
}  
console.log(counterFactory.increment());

