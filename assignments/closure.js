// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function myClosure () {
  let variable_1 = 0;
  let variable_2 = "'I am in a closured universe'";
  function doSomethig_1 () {
    // optional statements here
    return ++variable_1;
  }
  function doSomethig_2 ( param ) {
    // optional statements here
    return `${variable_2} joined with ${param}`;
  }

  return {
    doSomethig_1,
    doSomethig_2
  }
}
console.log(myClosure().doSomethig_1());
console.log(myClosure().doSomethig_2("'I am in the outer space'"));


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function (){
    return ++count;
  }
};
// Example usage:
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2
console.log(newCounter()); // 3



// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 0;
  function increment () {
    return ++counter;;
  }
  function decrement () {
    return --counter;
  }
  return {
    increment,
    decrement
  }
}
console.log(counterFactory().increment());
console.log(counterFactory().decrement());

