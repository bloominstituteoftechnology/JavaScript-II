// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function firstName(firstName) {
  return function(lastName) {
    return `${firstName} ${lastName}`
  }
}
const lastName = firstName('Simon');
console.log(lastName('Davis')); // Simon Davis
// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let counter = 0;
  return function() {
    return ++counter;
  }
  // Return a function that when invoked increments and returns a counter variable.
};

const newCounter = counter();
console.log(newCounter()); //1
console.log(newCounter()); //2
console.log(newCounter()); //3
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let counter = 0;
  return {
    increment: function() {
      return ++counter;
    },
    decrement: function() {
      return --counter;
    }
  };
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

const counterObj = counterFactory();

console.log(counterObj.increment());
console.log(counterObj.increment());

console.log(counterObj.decrement());

console.log(counterObj.increment());

console.log(counterObj.decrement());
console.log(counterObj.decrement());
console.log(counterObj.decrement());
