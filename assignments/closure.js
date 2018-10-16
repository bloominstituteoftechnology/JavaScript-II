// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function name() {
  let name = "Dennis Orbison";
  function sayName() {
    console.log(`My name is ${name}`);
  }
  sayName();
}

name();

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let counterNum = 0;

  function increment() {
    return ++counterNum;
  }
  return increment;
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

let newCounter = counter();
console.log(newCounter(), "counter");
console.log(newCounter(), "counter");

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 0;
  return {
    increment: function() {
      return ++counter;
    },
    decrement: function() {
      return --counter;
    }
  };
};

countUpDown = counterFactory();
//countUpDown.increment();
console.log(countUpDown.increment(), "counterFactory increment");
console.log(countUpDown.increment(), "counterFactory increment");
console.log(countUpDown.decrement(), "counterFactory decrement");
console.log(countUpDown.decrement(), "counterFactory decrement");
