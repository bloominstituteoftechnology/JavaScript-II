// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function login() {
  let username = 'Lambda';
  function displayUser() {
    console.log("Thanks for logging in " + username + "!" + " would you like to see your daily reports!");
  }
  return displayUser();
}
login();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let counter = 0;
  const innerFunction = () => {
    counter = counter + 1;
    return counter;
  }
  return innerFunction;
};
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
let counterFactory = () => {
  // used to store multiple counters without effecting the previous assigned counter
  let counter = 0;
  function changeBy(val) {
    counter += val;
  }
  // Return an object that has two methods called `increment` and `decrement`.
  return {
    // `increment` should increment a counter variable in closure scope and return it.
    increment: () => {
      changeBy(1);
    },
    // `decrement` should decrement the counter variable and return it.
    decrement: () => {
      changeBy(-1);
    },
    value: () => {
      return counter;
    }
  }
};
let counter1 = counterFactory();
let counter2 = counterFactory();
console.log(counter1.value()); // logs 0
counter1.increment();
counter1.increment();
console.log(counter1.value()); // log 2
counter1.decrement();
console.log(counter1.value()); // logs1
console.log(counter2.value()); // logs 0. Not affected by other counter. Have multiple counters