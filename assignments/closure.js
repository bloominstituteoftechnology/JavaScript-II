// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function Lambda(cohortP) {
  const cohort = cohortP
  console.log(`Hello, ${cohort}`);
  

  function rock(rockP) {
    const rocknRoll = rockP
    const gotThis = "You got this!"
    console.log(`${rocknRoll}, GO ${cohort}`);

    function got() {
      console.log(`${gotThis}, ${cohort}`)
      
    }
    got();
  }
  rock("You guys ROCK!");
}
Lambda("CSPT3");
// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
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
