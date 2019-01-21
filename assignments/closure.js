// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function toggleClosure () {
  let state = true;
  let count = 0;

  function toggleState () {
    state = !state;
    return `state ${++count} is ${state}`;
  }

  return toggleState;
}

let toggle = toggleClosure();
toggle();


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;

 //  let increment = () => ++count;   also works

  let increment = function() {
    return ++count;
  };

  return increment;

};

let countUp = counter();
countUp();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;

  const countObj = {
    increment: function() {return ++count},
    decrement: function() {return --count}

//    increment: ()  => ++count,
//    decrement: () => --count

  };

  return countObj
};

let countUpDown = counterFactory();
countUpDown.increment();
countUpDown.decrement();


/////////////////   Experiments with IIFEs   /////////////////
const counterFactory_IIFE = ( () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;

  const countObj = {
    increment: function() {return ++count},
    decrement: function() {return --count}

//    increment: ()  => ++count,
//    decrement: () => --count

  };

  return countObj
})();

let countUpDown_IIFE = counterFactory_IIFE;  // no () here since IIFE
countUpDown_IIFE.increment();
counterFactory_IIFE.decrement();


