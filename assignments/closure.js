// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function fanfare() {
  let team = "Chicago Bulls";
  function display () {
    console.log(`Give it up for Jordan and the ${team}!\n`);
  }
  display();
}

fanfare();

// ==== Challenge 2: Create a counter function ====
const counter = function() {
  let count = 0;
  return function() {
    return ++count;
  };
};

const newCounter = counter();
const counterMsg = "Counter invoked:";

console.log(`${counterMsg} ${newCounter()}`);
console.log(`${counterMsg} ${newCounter()}`);
console.log(`${counterMsg} ${newCounter()}`);

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = function() {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  return {
    count: 0,
    increment: function() {
      return ++this.count;
    },
    decrement: function() {
      return --this.count;
    }
  }
};

const counterObject = counterFactory();

console.log(counterObject.increment());
console.log(counterObject.increment());
console.log(counterObject.decrement());
console.log(counterObject.increment());
console.log(counterObject.increment());
console.log(counterObject.decrement());
console.log(counterObject.decrement());
console.log(counterObject.increment());
console.log(counterObject.decrement());


