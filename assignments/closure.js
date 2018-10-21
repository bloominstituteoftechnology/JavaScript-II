// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const hello = "Hi there!";
function logIt() {
  console.log(hello);
}
logIt();

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let increment = 0;
  return () => increment++;
}

const newCounter = counter();
newCounter();
newCounter();
newCounter();
newCounter();
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
