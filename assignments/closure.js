// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function myFunction() {
  myName = 'Brett';

  function displayMyName() {
    console.log(myName);
  }
  displayMyName();
}

myFunction();


// ==== Challenge 2: Create a counter function ====
//const counter = () => {
// Return a function that when invoked increments and returns a counter variable.

//};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

const newCounter = (() => {
  let counter = 0;
  return function () {
    counter += 1;
    console.log(counter);
    return counter
  }
})();

newCounter(); //1
newCounter(); //2
newCounter(); //3
newCounter(); //4

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
//const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
//};

const CounterFactory = () => {
  let counter = 0;
  return {
    increment: () => (++counter),
    decrement: () => (--counter),
  };
}

const newCounter = CounterFactory();
newCounter.increment();
newCounter.increment();
newCounter.decrement();