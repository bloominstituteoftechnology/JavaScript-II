// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function tellAge(age) {
  const currentAge = age;
  console.log(`I am ${age} years old`);
  
  function older() {
    const newAge = 50;
    console.log(`In ${newAge - age} years I will be ${newAge} years old`);
  }
  older();
}

tellAge(30);


// ==== Challenge 2: Create a counter function ====
let count = 0;
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  count++;
  console.log(count);
};
counter();
counter();
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
function newFunction() {
  const count = 0;
  console.log(count + 1);
}

