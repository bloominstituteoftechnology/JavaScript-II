// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

let numOne = 1;

function logOne() {
  let numtwo = 2;
  console.log(numOne);
  
  function logTwo () {
    console.log(numtwo);
  }

  logTwo();
}

logOne();

// ==== Challenge 2: Create a counter function ====

count = 0;

function addOne() {
  count += 1;
  return count;
};

addOne();
addOne();
console.log(addOne());

  // Return a function that when invoked increments and returns a counter variable.

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
