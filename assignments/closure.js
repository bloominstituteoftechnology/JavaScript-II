// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function outerLayer() {
  const privateVar = 4; // This variable is in the closure of the "outerLayer" when you console.log closureExample()
  function innerLayer() {
    return privateVar + 4;
  }
  return innerLayer;
}

const closureExample = outerLayer();
console.log(closureExample());

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let total = 0;
  function increment() {
    return (total += 1);
  }
  return increment;
};
const newCounter = counter();
console.log("The counter is now at " + newCounter()); // 1
console.log("The counter is now at " + newCounter()); // 2
console.log("The counter is now at " + newCounter()); // 3
console.log("The counter is now at " + newCounter()); // 4
console.log("The counter is now at " + newCounter()); // 5

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
