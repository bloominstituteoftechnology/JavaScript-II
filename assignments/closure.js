// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let name = "William VanDolah";
let greeting = () => `Hello ${name}`
console.log(greeting());



// ==== Challenge 2: Create a counter function ====
const counter = function() {
  // Return a function that when invoked increments and returns a counter variable.
  let counting = 1;
  return function(){
    return counting++
  }
};
console.log(counter())

const newCounter = counter();
console.log(newCounter())
console.log(newCounter())
console.log(newCounter())
console.log(newCounter())
console.log(newCounter())

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// let counting = 1
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counting = 1;
  return {
  	"increment": () => counting++,
  	'decrement': () => counting--,
  }
}

factoryCounter = counterFactory();
console.log(factoryCounter.increment());
console.log(factoryCounter.increment());
console.log(factoryCounter.increment());
console.log(factoryCounter.increment());
console.log(factoryCounter.decrement());
console.log(factoryCounter.decrement());
console.log(factoryCounter.decrement());
console.log(factoryCounter.decrement());
