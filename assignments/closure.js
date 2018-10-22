// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!


//should return first and last name
const fName = 'Taylor';

function fullname () {
  const lName = 'Belk';
  console.log(fName + ' ' + lName);
}


fullname();







// ==== Challenge 2: Create a counter function ====
// Return a function that when invoked increments and returns a counter variable.

// let x = 0;
// function counter() {
//   x++
//   function alert() {
//   console.log(x);
// } alert() } 

// counter();
// counter();
// counter();


let counter = function() {
  let x = 0;
  return increment;
  
  function increment() {
    x++;
    return x;
  } 
} 

const newCounter = counter();

console.log(newCounter());
console.log(newCounter());
console.log(newCounter());





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
