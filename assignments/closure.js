// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function greeting() {

  let name = 'Bao';

  function device() {
    let laptop = "Windows";
    console.log("Hello I\'m " + name);

    function school() {

    console.log("I am using a " +laptop + " laptop" + " for Lambda School");
    }
    school();
  }
  device();
}

greeting();
// ==== Challenge 2: Create a counter function ====
//const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
function addOneCounter() {
  let counter = 0;
   function resultIncrement() {
    counter++;
    return counter;
    }
    return resultIncrement;
}
const newCounter = addOneCounter();
console.log(newCounter());
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
