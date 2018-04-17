// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function parent() {
  var crib = "Holds baby";
  function child() {
    console.log(crib);
  }
  child();
}
parent();

// ==== Challenge 2: Create a counter function ====
let counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // let count = 0;
  // let myCounter = () => {
  //   count++;
  //   console.log(count);
  // }
let count = 0;
return () => {
  count++;
  return count;
  }
}

const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
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
  let count = 0;
  let timeChange = {
    increment:count++,
    decrement:count--
  };
  return count;
};
let newCount = counterFactory();

console.log(newCount);
console.log(newCount);
console.log(newCount);
