// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const closuresDown = (name) => {
  let firstName = "Lambda";

  const closureDump = () => {
    let subject = name;
    return `${firstName} has taught me ${subject}, I know you do not believe it!`;
  }
  
  return closureDump();
}

console.log(closuresDown("JS"));
// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  const increment = () => {
    return ++count;
    // console.log(count);
  }
  return increment;
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// const newCounter = counter();
// console.log(newCounter());
// console.log(newCounter());
//console.log(newCounter);

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
//   // Return an object that has two methods called `increment` and `decrement`.
//   // `increment` should increment a counter variable in closure scope and return it.
//   // `decrement` should decrement the counter variable and return it.
  let count = 0;
  const increment = () => {
    return ++count;
  }

  const decrement = () => {
    return --count;
  }
  return {increment, decrement};
};

const manageCounter = counterFactory();
console.log(manageCounter.increment());
console.log(manageCounter.increment());
console.log(manageCounter.increment());
console.log(manageCounter.decrement());
