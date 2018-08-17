// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function airplane(){

  let model = 'Boeing 747';

  function takeoff(){
    let departure = 'Los Angeles International';
    console.log('The ' + model + ' takes off from ' + departure + ' airport.');

  function landing(){
    let destination = 'New York La Guardia';
    console.log('The ' + model + ' touches down in ' + destination + ' airport.');
  }
  landing();
  }
  takeoff();
}

airplane();

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let n = 0;
  return function(){
    n += 1;
    console.log(n);
  }
};
// Example usage: 
const newCounter = counter();
newCounter(); // 1
newCounter(); // 2
newCounter(); // 3
newCounter(); // 4

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
