// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function testing (param) {
  let result;
  function newFunc(param) {
    let a = 3;
    result = a * param;
  }
  newFunc(param);
  console.log(result);
}
testing(3);
testing(5);


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let counter = 0;
  return function() {
    return counter += 1;
  }
};
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());



// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

// const counterFactory = () => {

// };
// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.

function counterFactory() {
  let counter = 0;
  return {
    increment: function() counter+=1;
    decrement: function() counter-=1;
  }
}

let myFactory = counterFactory();
myFactory.increment();

console.log(counterFactory());
