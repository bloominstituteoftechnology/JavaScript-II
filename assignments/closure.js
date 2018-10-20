// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let favCandy = "jelly beans";
function trickOrTreat() {
  return `Trick or treat can I have some ${favCandy}?`;
}

let otherCandy = "candy corn";
function sorry() {
  favCandy = "chocolate bars";
  return `Sorry, we don't have any ${favCandy}!`;
  
}

console.log(trickOrTreat());
console.log(sorry(otherCandy));

// ==== Challenge 2: Create a counter function ====

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;  
  return() => ++count;

};

const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

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
  const num = {
    increment: _ => ++count,
    decrement: _ => --count
  };
  return num;
};

let result = counterFactory();
console.log(result.increment());
console.log(result.increment());
console.log(result.increment());
console.log(result.decrement());
console.log(result.decrement());

