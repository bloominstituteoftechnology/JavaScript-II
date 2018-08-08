// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function greeting(){
  let name = "dude";

  function greetName(){
    console.log("What up! " + name)
  }
  return greetName();
}
greeting()

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let n = 0;
  return function(){
    n++;
    return n;
  }
};

const newCounter = counter();
newCounter(); //1
newCounter(); //2



/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
let x = 0;
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let newObj = {};
  newObj.increment = function(){
    x++;
    return x;
  }
  newObj.decrement = function(){
    x--;
    return x;
  }
  return newObj;
}
let newCounter = counterFactory();
console.log(newCounter.decrement());
console.log(newCounter.decrement());
