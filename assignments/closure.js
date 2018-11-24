// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const simple = () => {
  myName = "Kelly";
  return insideFunction = () => {
    return (myName + " is learning.");
  }
}
const saying = simple(); // equals whatever simple() returns, which is the insideFunction()
console.log(saying()); // console logs what the insideFunction() returned, whih is the saying


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  myCount = 0;
  return innerCounter = () => {
    return myCount += 1;
  }
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// Testing
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
const anotherCounter = counter();
console.log(anotherCounter());

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  myCounter = 0;
  return counterObject = {
    "increment": function() {
      return myCounter += 1;
    },
    "decrement": function() {
      return myCounter -= 1;
    }
  }
};

const newCounting = counterFactory();
console.log(newCounting.increment());
console.log(newCounting.increment());
console.log(newCounting.increment());
console.log(newCounting.decrement());
