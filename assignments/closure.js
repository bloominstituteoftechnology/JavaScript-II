// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!


function profile(name){
  const myName = name;
  console.log(`My name is ${myName}`);

  function hashName(){
    console.log(Math.random().toString(36).substr(9) + myName);

    function myAge(){
      console.log(Math.random() * Math.floor(50));
    }
    myAge();
  }
  hashName();
}
profile('Corey');

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
    let count = 0;

    function counted(){
      ++count;
      return count;
    }
    return counted();
};

const newCounter = counter();
console.log(newCounter);
console.log(newCounter);
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
