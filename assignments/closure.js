// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

console.log('CLOSURE CHALLENGE 1 👇');

let first_name = "Maxime";
let last_name = "Salomon";
let lambda = "Lambda School";

function myNameLearn() {
  return first_name + " " + last_name + " is learning how to code with " + lambda + "!";
}

console.log(myNameLearn());

// ==== Challenge 2: Create a counter function ====

console.log('CLOSURE CHALLENGE 2 👇');

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;

  return function() {
    ++count
    return count;
  }

};

const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2
console.log(newCounter()); // 3
console.log(newCounter()); // 4
console.log(newCounter()); // 5
console.log(newCounter()); // 6
console.log(newCounter()); // 7

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

console.log("Closure Stretch problem"); // 4

const counterFactory = (increment, decrement) => {
  let count = 0;
  return function() {
    count = count + increment;
    count = count - decrement;
    return count;
  }

  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

const newCounterFactory = counterFactory(7, 3);
console.log(newCounterFactory()); // 4