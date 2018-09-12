// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const whoDoneIt = () => {
  const name = 'Greg';
  const doneIt = () => `Did ${name} do it?`;
  return `${doneIt()} ${name} done it!`;
};

console.log(whoDoneIt());

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  const increment = () => (count += 1);
  return increment;
};
const newCounter = counter();
newCounter(); // 1
newCounter(); // 2
console.log(newCounter());

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count = 0;
  // Return an object that has two methods called `increment` and `decrement`.
  const counter = {
    // `increment` should increment a counter variable in closure scope and return it.
    increment: () => (count += 1),
    // `decrement` should decrement the counter variable and return it.
    decrement: () => (count -= 1)
  };
  return counter;
};

const countGame = counterFactory();
console.log(countGame.increment());
console.log(countGame.increment());
console.log(countGame.decrement());
console.log(countGame.decrement());
