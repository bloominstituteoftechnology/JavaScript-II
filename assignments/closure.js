// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function calculate() {
  let name = "Brandon";

  function calculateChild() {
    return name;
  }
  return calculateChild();
}
console.log(calculate());

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let num = 1;
  return () => { return num++ };
};
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let num = 0;
  return {
    "increment": () => { return num++ },
    "decrement": () => { return num-- }  
  };
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};