// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function catTalks() {
  let name = "Timmy the Cat!";
  function talk() {
    console.log("Meow says" + " " + name);
  }

  talk();
};

console.log(catTalks())

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let nums = 0;

  return () => (++nums);
};

const newCount = counter();
console.log(newCount())
console.log(newCount())
console.log(newCount())
console.log(newCount())
//  Example usage: const newCounter = counter();
//  newCounter(); // 1
//  newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
    increment: () => (++count),
    decrement: () => (--count),
  };
};

const newFactoryCount = counterFactory();
newFactoryCount.increment();
newFactoryCount.decrement();

console.log(newFactoryCount.increment());
console.log(newFactoryCount.decrement());
console.log(newFactoryCount.increment());
console.log(newFactoryCount.increment());
console.log(newFactoryCount.decrement());