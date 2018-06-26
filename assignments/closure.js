// ==== Challenge 1: Write your own closure ES5====
// Write a simple closure of your own creation.  Keep it simple!

// let parent = function(){
//   let parentVar = "Hello";
//   let childFunction = function(){
//     return `${parentVar} Vim!`;
//   }
//   return childFunction;
// }


// ==== Challenge 1: Write your own closure ES6====
// Write a simple closure of your own creation.  Keep it simple!

let parent = () => {
  let parentVar = "Hello";
  let childFunction = () => `${parentVar} Vim!`
  return childFunction;
}


let parentInvoke = parent();
console.log(parentInvoke());



// ==== Challenge 2: Create a counter function ES5====
// const counter = () => {
//   // Return a function that when invoked increments and returns a counter variable.
//   let counter = 0;
//   return function(){
//     return ++counter;
//   }
// };

// ==== Challenge 2: Create a counter function ES6====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let counter = 0;
  return () => ++counter;
};


// Example usage: 
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ES5====
// const counterFactory = () => {
//   // Return an object that has two methods called `increment` and `decrement`.
//   // `increment` should increment a counter variable in closure scope and return it.
//   // `decrement` should decrement the counter variable and return it.
//   let counter = 0;
//   return {
//     increment: function(){
//       return counter += counter +1;
//     },
//     decrement: function(){
//       return --counter;
//     }
//   }
// };


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ES6====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 0;
  return {
    increment: () => ++counter,
    decrement: () => --counter
  }
};

console.log(counterFactory().increment())
console.log(counterFactory().decrement())
