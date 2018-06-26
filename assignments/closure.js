// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function multiplier(x) {
  return function(y) {
    return x * y;
  };
}
var mutiply5 = multiplier(5);
console.log(mutiply5(10));

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.'
  let newCounter = 0;
  return function increment(){
    newCounter += 1;
    return newCounter;
  }
};
const newCounter = counter();
newCounter();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let newCounter = 0;
  return{
    increment: function increment(){
      return newCounter += 1;
    },
    decrement: function decrement(){
      return newCounter -= 1;
    }
  }
}
let newCounter = counterFactory();
newCounter.increment();