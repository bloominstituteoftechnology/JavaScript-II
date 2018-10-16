// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let someVariable = 'value';
function displayClosureVariable(someVariable){
  console.log(`The variable\'s \"${someVariable}\" is currently a local variable`);
  // lets debugger stop at this line. Use step to check line execution to see when someVariable becomes a closure variable
  //debugger; // uncomment line to use debugger.

  function useClosureVariable(){
    console.log(`The variable\'s \"${someVariable}\" is currently a closure variable`);
  }
  useClosureVariable();
}
displayClosureVariable(someVariable);

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  count = 0;
  return () => ++count;
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
