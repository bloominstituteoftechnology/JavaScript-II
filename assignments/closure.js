// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

//var name = "Shannon"
//const greeting = (name) => {
//  var greetingWord = "Hello"
//  return function () {return greetingWord + " " + name;}
//}

//console.log(greeting());
var greeting = (function () {
  var greetingWord = "Hello";
  return function (name) {
      return greetingWord + " " + name;
  }
})();
console.log(greeting("Shannon"));

// ==== Challenge 2: Create a counter function ====
var add = (function () {
  var counter = 0;
  return function () {counter += 1; return counter}
})();

  // Return a function that when invoked increments and returns a counter variable.

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  var num = 0;
    let object = {
    increment: function () {num += 1; return num},
    decrement: function () {num += 1; return num},
  }
  return object;
};
