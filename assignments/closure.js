// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function outer(){
  let outerVar = "thing";
  function inner(){
  console.log(outerVar);
  }
  inner();
}
outer();

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let counter = 0;
  return function(){
   counter++;
   return counter;
  }
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: 
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let counter = 0;
  return {
    "increment": function(){counter++; return counter;},
    "decrement": function(){counter--; return counter;}
  }
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

const anotherCounter = counterFactory();
console.log("\n" + anotherCounter.increment());
console.log(anotherCounter.increment());
console.log(anotherCounter.decrement());
