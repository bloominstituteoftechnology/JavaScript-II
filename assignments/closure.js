// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const nickname = 'Twinkie';
function crazyName(){
  const firstName = 'Myasia';
  alert('My name is ' ${firstName}, ' but my nickname is ' ${nickname});
}
console.log(crazyName);

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

let count = 0;
return function(){
  count = count + 1;
  return count;
}
};

const newCounter = counter();
console.log(newCounter());
console.log(newCounter());

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

const counterFactory = () => {

let counter = 0;
return {
  increment: function() {
    return (counter += 1);
  },

   decrement: function() {
    return (counter -= 1);
  }
};
}

const callFactory = counterFactory();

console.log(callFactory.increment());
console.log(callFactory.increment());
console.log(callFactory.increment());
console.log(callFactory.decrement());