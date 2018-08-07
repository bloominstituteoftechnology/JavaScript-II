// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let num = () => {
  let x = 6;
  console.log(x);

  let num2 = () => {
    let x = 7;
    console.log(x);
  }
  num2()
};
num()

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let x = 0;
  // Return a function that when invoked increments and returns a counter variable.
  return () => {
    return x++;
  }
};
let addBy1 = counter();
console.log(addBy1());
console.log(addBy1());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
