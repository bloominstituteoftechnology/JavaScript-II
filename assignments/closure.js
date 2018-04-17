// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function multiply() {
  let num = 5;
  function timesTen() {
    return num * 10;
  }
  return timesTen();
}
console.log(multiply());

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let num = 0;
  return () => {
    num++;
    return num;
  };
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
    let x = 0;
  function newVal(num) {
    x += num;
  }
  return {
    increment: function() {
      newVal(1);
    },
    decrement: function() {
      newVal(-1);
    },
    value: function() {
      return x;
    }
  };
};

