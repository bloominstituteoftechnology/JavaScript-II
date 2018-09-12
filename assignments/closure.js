// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function sing(){
  let verse1 = 'To the window';
  console.log(verse1)
  function singMore(){
    let verse2 = `${verse1}, to the wall`;
    console.log(verse2);
  }
  singMore();
}

// ==== Challenge 2: Create a counter function ====

const counter = () => {
  let num = 0; // *counter variable
  // 1. Return a function that 2a. when invoked increments and 2b. returns a *counter variable.
  function counting(){
    num++;
    return num;
  } 
  // counting();
  return counting; // 1. Return a function
};

const newCounter = counter();
const secondCounter = counter();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  let num = 0;
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  return {
    increment: () => {
      num++;
      return num;
    },
    decrement: () => {
      num--;
      return num;
    }
  }
};

const anotherCounter = counterFactory();

// ======== IIFE =========
const myTeam = (function(){
  let team = 'Pittsburgh Steelers';
  return team;
})();