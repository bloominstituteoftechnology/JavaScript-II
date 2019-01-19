// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!



function numberGenerator() {
  // Local “free” variable that ends up within the closure
  var num = 1;


function checkNumber() { 
    console.log(num);
  }
  num++;
  return checkNumber;
}

var number = numberGenerator();
number(); 



// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.

  
let number = 0;
  function counterfunction() {
    return number++;
  }
  return counterfunction;
};
let count = counter();
console.log(count());
console.log(count());
console.log(count());


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
