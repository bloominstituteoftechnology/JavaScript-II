// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let name = "Jason";
function returnName () {
  return name;
}
console.log(name);

// ==== Challenge 2: Create a counter function ====
const counter = function() {
  // Return a function that when invoked increments and returns a counter variable.
  let i = 0
return function(){
  i = i +1
  return i;
} 

};
const newCounter = counter();
console.log(newCounter);
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = function() {
  let i = 0
  return function increment () {
     i = i +1
    return i;
  
  return function decrement () {
    i = i - 1
    return i;
}
  };
}
const newCounterFactory = counterFactory();

// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.


  