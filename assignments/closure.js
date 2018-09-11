// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function nameTag() {
  let name = "Katy";
  function writeName(){
    console.log(`Hello, my name is ${name}`);
  }
  writeName();
}

nameTag();

// ==== Challenge 2: Create a counter function ====
  // Return a function that when invoked increments and returns a counter variable.

let current = 0;
const counter = () => {
  function increaseCount(){
    console.log(current++);
  }
  increaseCount();
};


// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

  let number = 0;
  const counterFactory = () => {
    function increment(){
      return number++;
    }
    increment();
    function decrement(){
      return number--;
    }
    decrement();
  };