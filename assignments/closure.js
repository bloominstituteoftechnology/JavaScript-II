// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;

  function addIt() {
    return count++;
  }

  return addIt;
};

let newCounter = counter();
console.log(newCounter(1));
console.log(newCounter(1));
console.log(newCounter(1));

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;

  return {
    increment: () => {
      return ++count;
    },
    decrement: () => {
      return --count;
    }
  };
};

const foo = counterFactory();
console.log(foo.increment());
console.log(foo.increment());
console.log(foo.increment());
console.log(foo.increment());
console.log(foo.decrement());
