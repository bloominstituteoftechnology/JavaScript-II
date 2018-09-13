// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
 function simpleClosure() {
   insideFunction = function() {
     console.log('The function is coming from inside the function')
   }
   insideFunction();
 }

simpleClosure();


// ==== Challenge 2: Create a counter function ====
// const counter = () => {
//   let num = 0;
//   function goUp() {
//     num++;
//     return num;
//   }
//   return goUp;
// };
 // Return a function that when invoked increments and returns a counter variable.
// let new_counter = counter();

// console.log(new_counter());
// console.log(new_counter());
// console.log(new_counter());
const counter = () => {
  debugger
  let count = 0;
  return () => (++count)

}

console.log(counter()());
console.log(counter()());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
