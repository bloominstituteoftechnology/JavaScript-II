// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const phrase = "Lambda school is cool";
function returnPhrase () {
  return phrase;
}

console.log(returnPhrase());

// ==== Challenge 2: Create a counter function ====
var i = 0; 
const counter = () => i += 1;
// Return a function that when invoked increments and returns a counter variable.
const newCounter = counter;

console.log(newCounter());
console.log(newCounter());
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// var a = 0; 
// const counterFactory = () => {
// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.