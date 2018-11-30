// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function sayHello(name) {
  const nameHolder = name;
  console.log(`Hello, ${name}`);
  function sayGoodnight() {
    console.log(`Goodnight, ${name}!`);
  }
  sayGoodnight();
}

sayHello("Alex");

// ==== Challenge 2: Create a counter function ====
var counting = 1;
const counter = () => {
  return counting++;
  // Return a function that when invoked increments and returns a counter variable.
};

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
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
