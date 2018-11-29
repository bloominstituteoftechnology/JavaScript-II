// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function test(message) {
  console.log(message);
  return function(message) {
    message = message + " :D";
    return message;
  };
}
const newTest = test("Hiii");
console.dir(newTest);
// ==== Challenge 2: Create a counter function ====
let num = 0;
const counter = num => {
  // Return a function that when invoked increments and returns a counter variable.
  return function() {
    num++;
    console.log(num);
    return num;
  };
};
const newCounter = counter();
newCounter();
console.log(newCounter());
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
