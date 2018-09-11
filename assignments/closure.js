// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let movie = "Empire Strikes Back";
function bestStarWars() {
  return `${movie} is the my favorite Star Wars movie`;
}
bestStarWars();

// ==== Challenge 2: Create a counter function ====

const counter = () => {
  let num = 0;
  function goUp() {
    num++;
    return num;
  }

  return goUp;
};
let newCounter = counter();
newCounter(); // 1
newCounter(); // 2
console.log(newCounter()); // 3
// Return a function that when invoked increments and returns a counter variable.

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let val = 0;
  let obj = {
    increment: function() {
      val++;
      return val;
    },
    decrement: function() {
      val--;
      return val;
    }
  };
  return obj;
};
const newInc = counterFactory();

//ex:
newInc.increment(); // 1
newInc.increment(); // 2
newInc.decrement(); // 1
newInc.decrement(); // 0
