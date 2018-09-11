// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function example() {
  const d = new Date();

  function displayDate() {
    console.log(d);
  }

  displayDate();
}

example();

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let timesPinged = 0;

  displayCount = function() {
    timesPinged++;
    console.log(timesPinged);
  }
  return displayCount;
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
newCounter();
newCounter();
newCounter();
newCounter();
newCounter();

const anotherInstance = counter();
anotherInstance();
anotherInstance();
newCounter();

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
