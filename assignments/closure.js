// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
hello = "Hello"
function Greet(param){
  greeting = param;
  console.log(greeting);
  function Introduction(){
    console.log(`${greeting}, my name is Dan`);
  }
  Introduction();
}
Greet(hello);

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;// Return a function that when invoked increments and returns a counter variable.
  
  return () => (++count);
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  IncDecrementer = {
    incrementer: function(){
      return ++count;
    },
    decrementer: function(){
      return --count;
    }
  }
  return IncDecrementer;
};

const diffCounter = counterFactory();
console.log(diffCounter.incrementer());
console.log(diffCounter.incrementer());
console.log(diffCounter.incrementer());
console.log(diffCounter.decrementer());
console.log(diffCounter.decrementer());
