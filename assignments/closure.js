// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let greeting = 'Good Morning!';
let morningGreeting = () => {
  return greeting;
} 
console.log(morningGreeting());

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
let count = 0;
return () => (++count);
};
const newCounter = counter();
newCounter();
newCounter();


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
let count = 0;
let obj = {
  "increment": () => (count++),
  "decrement": () => (count--),
}
return obj;
};

const change = counterFactory();
change.increment();
change.decrement();
