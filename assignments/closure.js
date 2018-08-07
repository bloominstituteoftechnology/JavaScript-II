// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
// defining 
function sayName() {
  let character = "Ninja";
  
  function motivation() {
    let myWeapon = "throwing stars";
    console.log(character + " is stealthy");
    
    function weapon() {
      console.log(character + " likes to use " + myWeapon + " to defeat enemies");
    }
    
    weapon();
  }
  
  motivation();
}

// invoking
sayName();

// ==== Challenge 2: Create a counter function ====
let numCount= 0 ;

const counter = () => {
    // Return a function that when invoked increments and returns a counter variable.
    return numCount = numCount + 1
  };
  
  console.log(counter());
  console.log(counter());

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