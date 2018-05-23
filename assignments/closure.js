// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let myName = "Zach";

function sayHello() {
  let newName = "elijah";
  // accessing myName outside this function
  return `Hello ${myName}`;
}
console.log(sayHello());



// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let increment = 0;
  return () => (increment++);
}
const secondCounter = counter();
counter();
counter();
counter();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  let counter = 0;
  return {
    increment: () => (counter++),
    decrement: () => (counter--)
  };
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
const newCounter = counterFactory();
newCounter.increment();
newCounter.decrement();