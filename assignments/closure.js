// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
(($) => {
  let A = '\ud83d\udc45';
  $[`${$}`] = a => A;
  console.log($[`${$}`]());
})([]);

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let value = 1;
  return function (){
    return value++;
  }
};
var newCounter = counter();
console.log(newCounter())
console.log(newCounter())
console.log(newCounter())
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let privateCounter = 0;
  return {
    increment(){
      return privateCounter++;
    },
    decrement(){
      return privateCounter--;
    }
  };
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

let counterObject = counterFactory();
console.log(counterObject.increment());
console.log(counterObject.increment());
console.log(counterObject.decrement());