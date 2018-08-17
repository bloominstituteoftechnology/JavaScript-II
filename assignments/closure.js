// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const addition = (a,b) => {
    const result = a+b;
    const logResult = (result) =>  {
        console.log(result)
    }
    logResult(result);
}
addition(1,2)

// ==== Challenge 2: Create a counter function ====
let x = 0;
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  return console.log(++x)
};
const newCounter = counter;
newCounter();
newCounter();
newCounter();

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
