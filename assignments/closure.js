// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function foo(){

  let a = 5;

  function baz(b){
    return a + b;
  }
  return baz;
}
myFunc = foo();  //returns baz function
console.log(myFunc(7));  //12

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  function inc(){
    count += 1;
    return count;
  }
  return inc;
};

const newCounter = counter();
// Example usage: const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;

  function increment(){
    return ++count;
  }

  function decrement(){
    return --count;
  }

  return {
    increment: increment,
    decrement: decrement,
  };
};

counterObj = counterFactory();
console.log('Counter: ' + counterObj.increment()); //1
console.log('Counter: ' + counterObj.increment()); //2
console.log('Counter: ' + counterObj.decrement()); //1

