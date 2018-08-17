// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const name = (name) => {
  let firstName = name;

  const sayHi = () => {
    console.log(`Hi ${firstName}!`);
  }
  return sayHi;
}

const hiKendra = name("Kendra");
const hiJohn = name("John");
hiKendra();
hiJohn();

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  
  const increment = () => { 
    console.log(++count);
  }
  return increment;
};
// Example usage: 
const newCounter = counter();
newCounter(); // 1
newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count = 0;

  const counterObject = {
    increment: () => {
      console.log(++count);
    },
    decrement: () => {
      console.log(--count);
    },
  }
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  return counterObject
};

const newerCounter = counterFactory();
newerCounter.increment();
newerCounter.increment();
newerCounter.increment();
newerCounter.decrement();