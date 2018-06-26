// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function myClosure() {
  let name = "Josue Peralta";

  return function () {
    return "My name is " + name;
  }
}

let displayName = myClosure();
console.log(displayName());

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let counter = 0;
  return function () {counter += 1; return counter}
};
// Example usage:
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 0;

  return {
    increment: function () {
      counter += 1;
    },
    decrement: function () {
      counter -= 1;
    },
    getValue: function () {
      return counter;
    }
  }
};

const newCounterFactory = counterFactory();

newCounterFactory.increment();
console.log(newCounterFactory.getValue());
newCounterFactory.decrement();
console.log(newCounterFactory.getValue());
