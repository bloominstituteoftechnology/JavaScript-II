// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function whatsMyName() {
  let firstName = "Jasmine";

  function logMyName() {
    console.log(firstName);
  }

  return logMyName;
}

let whatsYourName = whatsMyName();
whatsYourName();  // "Jasmine"


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;

  function increment() {
    return count += 1;
  }

  return increment;
};

const newCounter = counter();
newCounter();  // 1
newCounter();  // 2

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;

  function counter(countBy) {
    if (countBy === 'increment') {
      return count += 1;
    } else if (countBy === 'decrement') {
      return count -= 1;
    }
  }

  return counter;
};

let anotherCounter = counterFactory();
console.log(anotherCounter('increment'));  // 1
console.log(anotherCounter('increment'));  // 2
console.log(anotherCounter('increment'));  // 3
console.log(anotherCounter('increment'));  // 4
console.log(anotherCounter('decrement'));  // 3
console.log(anotherCounter('decrement'));  // 2
console.log(anotherCounter('decrement'));  // 1
console.log(anotherCounter('decrement'));  // 0


