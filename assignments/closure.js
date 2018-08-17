// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const isDope = () => { 
  const dopeness = "  is dope!";

  const nameInput = (name) =>{
    console.log(name + dopeness);
  }
  return nameInput;
}
const whereTheNameGoes = isDope()
whereTheNameGoes("Rob");


// ==== Challenge 2: Create a counter function ====
// Return a function that when invoked increments and returns a counter variable.

const counter = () => {
  let count = 0;
  return ( ) => {
    return ++count
  }
};

const logCounter = counter()
console.log(logCounter());
console.log(logCounter());
console.log(logCounter());
console.log(logCounter());
console.log(logCounter());
console.log(logCounter());
console.log(logCounter());
// Example usage: const newCounter = counter();


/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
    let count = 0;
    return{
      increment: () => {return ++count},
      decrement: () => {return --count}
    }
};

const whichWayCounter = counterFactory();
console.log(whichWayCounter.increment());
console.log(whichWayCounter.increment());
console.log(whichWayCounter.increment());
console.log(whichWayCounter.decrement());
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

