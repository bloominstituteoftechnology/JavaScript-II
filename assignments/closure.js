// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function sayHello() {
  var say = function() { console.log(hello); } 
  var hello = 'Hello, world!';
  return say;
}
var sayHelloClosure = sayHello(); 
sayHelloClosure(); 


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  return () => ++count;
  // Return a function that when invoked increments and returns a counter variable.
};
const newCounter= counter();
// Example usage: const newCounter = counter();
//const newCounter = counter();
newCounter(); // 1
newCounter(); // 2
newCounter();
newCounter();

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  let total = 0;
  return {
  // `increment` should increment a counter variable in closure scope and return it.
    increment: function (){
      total++;
      return total;
    },
// `decrement` should decrement the counter variable and return it.
    decrement: function () {
      total--;
      return total;
    }
  }
};

const counter2 = counterFactory();

counter2.increment();
counter2.increment();
counter2.increment();
counter2.decrement();