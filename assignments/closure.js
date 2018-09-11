// ==== Challenge 1: Write your own closure ====r
// Write a simple closure of your own creation.  Keep it simple!
function closureParent( print )
{
  return function()
  {
    console.log( print );
  };
};
closureParent( "hello" )();

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let counterVar = 0;
  // Return a function that when invoked increments and returns a counter variable.
  return function( )
  { 
    return counterVar++;
  }
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
let newCounter = counter();
console.log( newCounter() );
console.log( newCounter() );
/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  var counterVar = 0;
  return {
    "increment": function( )
    {
      return counterVar++;
    },
    "decrement": function( )
    {
      return counterVar--;
    }
  }
};
var sampleVar = counterFactory();
console.log( sampleVar.increment() );
console.log( sampleVar.increment() );
