// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function beWizard(yourName) {
const name = yourName;
console.log(`Hello, my name is ${yourName}, I'm a wizard!`);

  function grandMaster(){
    const master = `Oh, you are, are you, ${yourName}? Are you a Grand Master?`
    console.log(master);
  }
  grandMaster();
}
beWizard('Jordan');




// ==== Challenge 2: Create a counter function ====

 // Return a function that when invoked increments and returns a counter variable.
  

 const counter = () => {
   let start = 0
   function add() {
     start++
     return start;
   }
return add
 }

 newCounter = counter();
 console.log(newCounter())

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
