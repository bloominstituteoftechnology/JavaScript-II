// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function theDarkSide(){
  let character = "Darth Vader";

  function armChop(){
    let action = "lightsaber slash";
    console.log(character + " uses his " + action + " to chop off Lukes arm");

  function darkSideSucks(){
    let painfulTruth = "I am your Father"
    console.log(character + " breathes heavy, the replies.. "+ painfulTruth);
  }
    darkSideSucks();
  }
  armChop();
}

theDarkSide();

// ==== Challenge 2: Create a counter function ====
let plusOne = 0;

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  
  return plusOne += 1;
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
