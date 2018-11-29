// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function test() {
  let name = "jeff";

  const sayName = () => {
    return `Hello, ${name}`;
  };

  return sayName();
}

test();

// const sayName = function() {

// }

const newTest = test("Hiii");

// ==== Challenge 2: Create a counter function ====

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let num = 0;

  return function() {
    // num++;
    return ++num;
  };
};

// counter(4)

const newCounter = counter();
newCounter();

// counter(6);
// console.log(newCounter());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
