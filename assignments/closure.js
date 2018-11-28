// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function createAClosure() {
  let name = "Jamie"; 
  function displayName() { 
      console.log(name); 
  }
  displayName();    
}
createAClosure();


// I basically stole this from the Mozilla website, but it is the simplest type of closure I could think of.


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
let increment = 0;
return () => increment +=1;
};
 const newCounter = counter();
 console.log(newCounter());
 console.log(newCounter());
 newCounter(); 
 newCounter(); 
 console.log(newCounter());
 
/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
