// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function sayHi() { //defining
  let word = 'Hi'; //lexical scope

  function sayName() {
    let name = 'John';
    console.log(word + ', ' + name);

    function greeting() {
      console.log(word + ', how are you ' + name + '?');
    }
    greeting();
  }
  sayName();
}
sayHi(); //invoking


// ==== Challenge 2: Create a counter function ====
let count = 0;
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  return function() {
    return ++count;
  }
};
const newCounter = counter();
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
