// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const name = "Barbara";

function myName(){
  console.log (`My name is ${name}`);
}

myName();



// ==== Challenge 2: Create a counter function ====
const counter = () => {

  // Return a function that when invoked increments and returns a counter variable.
  counterVar = 0;
  return function numCounter(){
    counterVar++
    return counterVar;
  }
};

const f = counter()
console.log(f())
console.log(f())



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
