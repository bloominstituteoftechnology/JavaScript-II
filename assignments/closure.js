// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function concatenator(string, count) {
  let concatenate = function(string) {
    return result + string;
  }

  let result = ``;

  for (let i = 0; i < count; i++) {
    result = concatenate(string);
  }
  return result;
}

console.log(concatenator(`cake `, 5, (string) => result + string));

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  return () => ++count;
  // Return a function that when invoked increments and returns a counter variable.
};

const newCounter = counter();
console.log(newCounter());
console.log(newCounter());

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count = 0;

  return {
    increment : function() {
      return ++count;
    },
    decrement : function() {
      return --count;
    }
  }

  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

const stretchCounter = counterFactory();
console.log(stretchCounter.increment()); // 1
console.log(stretchCounter.increment()); // 2
console.log(stretchCounter.decrement()); // 1
console.log(stretchCounter.decrement()); // 0
console.log(stretchCounter.decrement()); // -1
console.log(stretchCounter.decrement()); // -2
