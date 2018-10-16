// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
console.log("Closure");
console.log("________");

function dog() {
  let bark = true;

  function cat() {
    console.log(`${bark} dat`);
  }

  cat();
}

dog();


// ==== Challenge 2: Create a counter function ====
let count = 0;
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  count++;
  return count;
};
// Example usage: const newCounter = counter(); <== i think these parentheses are incorrect?
// newCounter(); // 1
// newCounter(); // 2

const newCounter = counter;
newCounter();
newCounter();
newCounter();
newCounter();
console.log(newCounter());


/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
