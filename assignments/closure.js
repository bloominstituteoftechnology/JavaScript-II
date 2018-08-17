// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const hello =() => {
  
  function sayHello() {
    console.log('Hello');
  }
  
  return(sayHello);
}

const hi = hello();
hi();


// ==== Challenge 2: Create a counter function ====



let counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let num = 0;
  
  return counter = () => {num++;return num};
  
};

counter();
counter();
counter();

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
