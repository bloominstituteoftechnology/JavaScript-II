// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let num = 0;
const parent = () => {
  let value = "Jimbo";
  console.log("Parent has value", value);

  const child = () => {console.log("Child has same value as parent..." + value)};

  return child();
}

// ==== Challenge 2: Create a counter function ====

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let num = 0;
  return () => (++num);
};

const newCounter = counter();
// Example usage: const newCounter = counter();


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
    increment: () => (++count),
    decrement: () => (--count)
  }
};

const newCounterFactory = counterFactory();

parent();
console.log(newCounter());
newCounter();
newCounter();
newCounter();
console.log(newCounter());

console.log(newCounterFactory.increment());
newCounterFactory.increment();
newCounterFactory.increment();
newCounterFactory.increment();
newCounterFactory.increment();
newCounterFactory.increment();
console.log(newCounterFactory.increment());
newCounterFactory.decrement();
console.log(newCounterFactory.decrement());
