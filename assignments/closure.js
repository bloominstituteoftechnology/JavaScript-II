// ==== Challenge 1: Write your own closure ====
const divisibleBy = (x) => {
  return checkDivisibility = (y) => {
    return (y % x === 0);
  } 
}

let divByFive = divisibleBy(5);

divByFive(100); //returns true
divByFive(62); //returns false

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  let addCount = () => {
    return count = count + 1;
  }
  return(addCount);
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

const newCounter = counter();
newCounter(); // returns 1
newCounter(); // returns 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
