// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const greeting = () => {
  const hello = 'Hello ';

  const sayHello = (name) => {
    console.log(hello + name);
  }

  return sayHello;
}

const computerSaysHello = greeting();
computerSaysHello('Eric');


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return () => {return (count += 1);};
};

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
let currentCount = newCounter(); // 1
currentCount = newCounter(); // 2
currentCount = newCounter(); // 3
console.log(currentCount);


/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;

  return {
    increment: () => {
      return (count += 1);
    },
    decrement: () => {
      return (count -= 1);
    }
  }
};

const newCount = counterFactory();
let count = newCount.increment(); // 1
count = newCount.increment(); // 2
count = newCount.increment(); // 3
count = newCount.decrement(); // 2
count = newCount.increment(); // 3
count = newCount.decrement(); // 2
console.log(count);
