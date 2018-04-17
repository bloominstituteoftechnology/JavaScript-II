// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let math = 5 * 5;

let doMath = () => console.log(math);

doMath();
// ==== Challenge 2: Create a counter function ====
const newCounter = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  };
};
// Example usage: const newCounter = counter();
console.log(newCounter());
console.log(newCounter());

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let factory = 0;
  function change(val) {
    factory += val;
  }
  return {
    increment: () => change(1),
    decrement: () => change(-1),
    value: () => factory,
  };
};

console.log(counterFactory());

// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.
