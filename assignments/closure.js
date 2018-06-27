// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const foo = 'bar';
function returnFoo () {
  return foo;
}
returnFoo();

// ==== Challenge 2: Create a counter function ====
let num = 0;
const counter = () => {
  return () => ++num;

};
  // Return a function that when invoked increments and returns a counter variable.

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
newCounter()
newCounter()

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

object {}


let num = 0;
const increment = () => {
  
  return () => ++num;
};

const decrement = () => {
  return () => --num;
};
};

counterFactory(increment())