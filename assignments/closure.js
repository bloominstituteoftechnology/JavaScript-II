// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const firstLetter = 'A';
  const alphabet = function() {
    const secondLetter = 'B';
    return (`${firstLetter} ${secondLetter}`);
  };
console.log(alphabet());

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function () {
    return ++count;
  }
};
// Example usage: 
const newCounter = counter();
// console.log(newCounter());
// console.log(newCounter());
// console.log(newCounter());


/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
    const counterObject = {
      increment: function () {
        return ++count;
      },
      decrement: function () {
        return --count;
      }
    }
  return counterObject;
  
};

const myCounter = counterFactory();
//console.log(counterFactory() === console.log(myCounter);


// console.log(myCounter.decrement());
// console.log(myCounter.increment());
// console.log(myCounter.increment());
// console.log(myCounter.increment());
// console.log(myCounter.decrement());
