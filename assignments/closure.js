// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function sayName(name) {
    console.log(`Hello, my name is: ${name}`);

    function properName() {
          console.log(`Good Day! My name is ${name}`);
          debugger;
        }
        
        properName();
      }
      
      sayName("Tristan");

// ==== Challenge 2: Create a counter function ====
const counter = (param) => {
  return param++;
  // Return a function that when invoked increments and returns a counter variable.
};

counter();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.
const counterFactory = () => {

  let count = 0

  return {
    increment: () => ++count,
    decrement: () => --count
  }
}

const newCounterFactory = counterFactory()
newCounterFactory.increment()
newCounterFactory.increment()
newCounterFactory.increment()
newCounterFactory.increment()
newCounterFactory.increment()
newCounterFactory.increment()
newCounterFactory.increment()

console.log(newCounterFactory);
