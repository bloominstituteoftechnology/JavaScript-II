// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

let x = 3
 function multiplyByFive(y) {
   let result = y * 5;
   return result;
 }
 console.log (multiplyByFive(x));


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
    let counter = 0;
  function add(){
    return counter+=1;
  }
  return add;
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

    let value = 0;
  return {
    increment: () => {
      return ++value;
    },
     decrement: () => {
      return --value;
    }
  };
};