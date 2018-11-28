// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function showName (firstName, lastName) {
  var nameIntro = "Your name is ";
      // this inner function has access to the outer function's variables, including the parameter
  function makeFullName () {       
  return nameIntro + firstName + " " + lastName;    
  }
  
  return makeFullName ();
  }
  
  showName ("Michael", "Jackson"); // Your name is Michael Jackson

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let total = 0;
  function increment() {
    return (total += 1);
  }
  return increment;
  
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
console.log("The counter is now at " + newCounter()); 
console.log("The counter is now at " + newCounter()); 



/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
