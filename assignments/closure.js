// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const multiplyByFour = () => {
  const four = 4
  showAnswer = () => {
    console.log(four * 3);
  }
  showAnswer()
}

multiplyByFour()


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 1;

  return function(){
    return count++;
  };
  // Return a function that when invoked increments and returns a counter variable.
};

const newCounter = counter();

// Example usage: const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2
console.log(newCounter());
/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.
const counterFactory = () => {
  let counter = 0;
  let increment = () => counter += 1;
  let decrement = () => counter -= 1;

  let myFunctions = {increment, decrement};

  return myFunctions;
};

let newFactory = counterFactory()
console.log(newFactory.increment())
console.log(newFactory.increment())
console.log(newFactory.increment())
console.log(newFactory.decrement())
