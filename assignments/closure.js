// === Challenge 1: Write your own closure ===
// Write a simple closure of your own creation.  Keep it simple!

const letItRip = () => {
  const name = "Captian Falcon";
  const falconPunch = () => name;
  return falconPunch();
};

console.log(letItRip());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
const counter = () => {};

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
