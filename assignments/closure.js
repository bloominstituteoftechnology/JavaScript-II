// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function House() {
  let occupants = 4;
  this.howManyOccupants = function() {
    console.log("There are " + occupants + " people living in this house.");
  }
}
let myHouse = new House();
myHouse.howManyOccupants();


// ==== Challenge 2: Create a counter function ====

const counter = () => {
  let count = 0;
  return () => (++count);
}

const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

  // Return a function that when invoked increments and returns a counter variable.
 
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count = 0;
  return {
    increment: () => (++count),
    decrement: () => (--count),
  };
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

const newCounterFactory = counterFactory();
newCounterFactory.increment();
console.log(newCounterFactory.increment());
console.log(newCounterFactory.decrement());
console.log(newCounterFactory.increment());
console.log(newCounterFactory.decrement());
console.log(newCounterFactory.increment());
console.log(newCounterFactory.increment());