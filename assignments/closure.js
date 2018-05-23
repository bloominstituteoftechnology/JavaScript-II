// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const clo = 'sure';
function returnClo () {
  return clo;
}
console.log(returnClo());

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return () => (++count);
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
console.log(newCounter()); // 1
newCounter(); // 2



// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
let counterFactoryCount = 0;
const counterFactory = () => {
// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.
    
  increment: return counterFactoryCount++;,
    decrement: return counterFactoryCount--;
  };
  console.log(counterFactory.increment);
  //return counterFactoryMethods;

console.log(counterFactory.increment)