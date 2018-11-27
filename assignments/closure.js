// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const name = "Matt";
function whatsUrName(){
  return name;
}
console.log(whatsUrName());
// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function(){
    count ++;
    return count
  }
 }
const newCounter = counter();
console.log(newCounter());
console.log(newCounter()); 



/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
//Researched on the interwebs and modified this solution. Near to continue diivng deeper on the power of object functions.

const counterFactory = (function() {
  var count = 0;
  return {
  increment: function() {
    return count+= 1;
  },
  decrement: function() {
    return count-= 1;
  },
  value: function() {
    return count;
  }
  };   
})();
console.log(counterFactory.value()); // 0
counterFactory.increment();
counterFactory.increment();
console.log(counterFactory.value()); // 2
counterFactory.decrement();
console.log(counterFactory.value()); // 1
 

  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

