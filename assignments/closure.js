// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function myClosure() {
  const  name = "Talent"; // name is a local variable created by closure declare as a function
  function displayName() { // displayName() is the inner function, a closure
      console.log(name); // displayName() uses variable declared in the parent function    
  }
  displayName();    
}
myClosure();

// ==== Challenge 2: Create a counter function ====
const counter = () => {
    let count = 0;
      return count++;
  }
  let counter1 = counter();
  let counter2 = counter();
  console.log(counter1);
  console.log(counter2);
  // Return a function that when invoked increments and returns a counter variable.
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
