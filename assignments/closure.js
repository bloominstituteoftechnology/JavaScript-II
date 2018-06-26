// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function subtract() {
  let counter = 0;
  function minus() {counter -= 1;}
  minus();    
  return counter; 
}

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
    function plus() {count += 1;}
    plus();    
    return count; 
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 0;
  function increment(x){
    counter += x;
  }
  function decrement(x){
    counter -= x;
  }
  return counter;
};
