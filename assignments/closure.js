// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function parent() {
  const parentName = "Alice";
  return child();
  function child() {
    const childName = "Bob";
    return grandChild();
    function grandChild() {
      const grandChildname = "Charles";
      return console.log("Parent's name is " + parentName + ". Child's name is " + childName + ". Grandchild's name is " + grandChildname + ".");
    }
  }
}
parent();

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  return count++;
};

let count = 1;
const newCounter = () => console.log(counter());
newCounter();
newCounter();
newCounter();

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
