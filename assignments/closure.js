// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function parentFunc() {
  let myValue = "Bill";
  console.log("Parent: " + myValue);

  function childFunction() {
    console.log("Child of: " + myValue);
  } //child
  return childFunction();
}; //parent
console.log(parentFunc());

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let num = 0;
  return () => (num++);
};
const newCounter = counter();
newCounter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2




// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
