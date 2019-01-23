// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const getName = () => {
  let fullName = "Mo";
  const writeName = () => {
    return `And ${fullName} has done it again!`;
  }
  return writeName;
}

const theMo = getName();
console.log(theMo());

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  const addCounter = () => {
    return count += 1;
    // console.log(counter);
  }
  return addCounter;
};

const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count = 0;
  const increment = () => {
     return ++count;
    // console.log(count);
  }
  const decrement = () => {
     return --count;
    // console.log(count);
  }
  return {increment, decrement}; 
};

const cF = counterFactory();
console.log(cF.increment());
console.log(cF.increment());
console.log(cF.decrement());
