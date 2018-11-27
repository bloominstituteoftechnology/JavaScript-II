// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function firstFunction(){
  const firstVar = 36;
  //debugger;
  function secondFunction() {
    const secondVar = 42;
    //debugger;
    function thirdFunction() {
      let thirdVar = firstVar + secondVar;
      //debugger;
      console.log(`The sum of ${firstVar} + ${secondVar} = ${thirdVar}`)
    }//thirdFunction

    thirdFunction();
  }//secondFunction

  secondFunction();
}//firstFunction

//invoke firstFunction
firstFunction();

// ==== Challenge 2: Create a counter function ====
let counterVar = 0;
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  counterVar++;
  console.log(counterVar);
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
counter();
counter();
counter();

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
