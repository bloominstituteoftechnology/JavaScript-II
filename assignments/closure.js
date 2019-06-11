// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function sayHello() {
  let name = "Jim";
  function slang() {
    // accessing myName outside this function using a closure
    console.log("Yo " + name)
  }
  // calling slang inside sayHello()
  slang();
}
console.log(sayHello());


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  
  return () => (++count);
  // Return a function that when invoked increments and returns a counter variable.
};

// Stretch Solution

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
console.log(newCounter()) // 1
console.log(newCounter()) // 2
console.log(newCounter()) // 3
console.log(newCounter()) // 4
console.log(newCounter()) // 5

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count = 0;
  return {
    increment: () => (++count),
    decrement: () => (--count),
  };
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

const newCounterFactory = counterFactory();
newCounterFactory.increment(); // 1
newCounterFactory.decrement(); // 0
newCounterFactory.decrement(); // -1