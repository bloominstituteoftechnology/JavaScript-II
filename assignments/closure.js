// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function cabinet() {
  let keychain = 'public key';

  function secretDrawer() {
    console.log(`Secret Drawer has reach to ${keychain}.`);
  }

  secretDrawer();
}

cabinet();

// ==== Challenge 2: Create a counter function ====
let pushUps = 0;
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  return pushUps++;
};

counter();
counter();

console.log(pushUps);
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
let counter = 0;

// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.
const counterFactory = () => {
  const object = {
    "increment": () => counter++,
    "decrement": () => counter--,
  }
  return object;
};

counterFactory().increment();
counterFactory().increment();
counterFactory().increment();
console.log(counter); // 3

counterFactory().decrement();
counterFactory().decrement();
console.log(counter); // 1
