// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let math = 5 * 5;

let doMath = () => console.log(math);

doMath();
// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  };
};

let newCounter = counter();

console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let factory = 0;
  return {
    increment: () => factory++,
    decrement: () => factory--,
    value: () => factory,
  };
};

let newFac = counterFactory();
console.log(newFac.decrement());
