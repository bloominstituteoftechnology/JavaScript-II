// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function Closure() {
  var name = "Megatron";
  
  function myFunc() {
    console.log(name);
  }
  myFunc();
}

Closure();

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;

  const addOne = () => {
    console.log(++count);
  }

  return addOne;
};

const thisCounter = counter();

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
