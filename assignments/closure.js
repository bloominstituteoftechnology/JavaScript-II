// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const foo = (a, b) => {
  let ab = a * b;
  return (c, d) => {
    return ab * (c + d)
  }
}
const bar = foo(2, 3);
console.log(bar(4, 1));

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let i = 0;
  return () => {
    return ++i;
  }
};
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let i = 0;
  return {
    increment: () => {
      return ++i;
    },
    decrement: () => {
      return --i;
    }
  }
};

const ex = counterFactory();
console.log(ex.decrement());