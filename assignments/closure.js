// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function ClassBegins(whatDay) {
  const day = whatDay;
  console.log(`Class is on ${day}`);

  function className() {
    const className = "FSW14";
    console.log(`Hello ${className}, class is on ${day}.`);

    function time() {
      const time = "5:00 PM";
      console.log(`Hello ${className}, class is on ${day} at ${time}.`);
    }
    time();
  }
  className();
}

ClassBegins("Monday");

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let num = 0;
  function plusOne() {
    return num++;
  };
  return plusOne; {
  // Return a function that when invoked increments and returns a counter variable.
};
let newCounter = counter();
console.log(newCounter());
// ????? CONFUSED ^

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
