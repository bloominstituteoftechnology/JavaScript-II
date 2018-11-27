// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function firstName(yourName, yourAge){
  let myName = yourName;
  let myAge = yourAge;
  function age(){
    console.log( `My name is ${myName} and I'm ${myAge}`)
    
  }
  age();
}

firstName('Mike', 33);


// ==== Challenge 2: Create a counter function ====

const counter = () => {
  let count = 0;
  // Return a function that when invoked increments and returns a counter variable.
  return function (){
    // return count ++; //starts the counter at 0
    return ++ count; //starts the counter at 1
  }  
};

const newCounter = counter();

console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
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
