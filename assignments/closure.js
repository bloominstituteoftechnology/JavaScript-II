// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
console.log('----------CLOSURE----------')
function isThisClosure () {
  const closure = 'closure'
  console.log(closure)
  thisIsClosure();
  function thisIsClosure () {
    console.log(`Yea, this is ${closure}.`)
  }
}
isThisClosure();

// ==== Challenge 2: Create a counter function ====
const counter = (x) => {
  let count = x;
  count++;
  letsCount();
  function letsCount () {
    console.log(count);
  }
  // Return a function that when invoked increments and returns a counter variable.
};
counter(3);

// const newCounter = counter();
// newCounter;

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let num = 0;
  const obj 
    
    

  }

  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
