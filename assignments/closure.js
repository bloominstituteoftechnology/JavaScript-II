// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function ruben() {
  let bread = 'Rye';
  
  function layer1() {
    let spread = 'Thousand Island';
    
    function layer2() {
      let veg = 'Sauerkraut';
      let meat = 'Corned Beef';
      let cheese = 'Swiss';
      
      console.log('A ruben sandwich is: ' + meat + ' and ' + cheese + ' with ' + veg + ', on ' + bread + ' with ' + spread + ' and then grilled.')
    }
    layer2();
  }
  layer1();
}

ruben();

// ==== Challenge 2: Create a counter function ====

let count = 0;
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  return function() { 
    return ++count;
  };
};
// Example usage: const newCounter = counter();
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());


/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
