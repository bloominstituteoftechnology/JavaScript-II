// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function today() {

  let person = "Emily";
  
  function goals() {
    let tools = "MacBook";
    console.log(person + " is learning to code");
    
    function hardware() {
      console.log(person + " uses her " + tools + " everyday." );
    }
    
    hardware();
  }
  
  goals();
}

today();


// ==== Challenge 2: Create a counter function ====
// Return a function that when invoked increments and returns a counter variable.
const counter = () => {
  let count = 0;
  return () => (++count);
    console.log (counter);
  };


/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
