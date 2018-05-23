// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const myFunc = () => {
  const closureVariable = 'Voilá!';

  const innerFunc = () => {
    return closureVariable;
  };
  console.log(innerFunc());
};
myFunc();

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return () => console.log(++count);
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
newCounter(); // 1
newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
    increment() {
      console.log(++count);
    },
    decrement() {
      console.log(--count);
    },
  };
};

const newCounterFactory = counterFactory();
newCounterFactory.increment(); // 1
newCounterFactory.increment(); // 2
newCounterFactory.increment(); // 3
newCounterFactory.decrement(); // 2
