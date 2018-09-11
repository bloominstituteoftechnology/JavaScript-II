// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function outfit(outfitParameter) {
  const outfit = outfitParameter;
  const rando = "Pajamas!";
  console.log(`I'm wearing a ${outfit}`);

  function shoes(shoeParameter) {
    const shoes = shoeParameter;
    const randofoot = "flipflops"
    console.log(`${outfit} with ${shoes} to be exact`);
    console.log(`${rando} and ${randofoot} are better!`);
  }

  shoes("dress shoes");
}

outfit("A suit");

// ==== Challenge 2: Create a counter function ====
// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  return () => (++count);
  // Return a function that when invoked increments and returns a counter variable.
};

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
console.log(newCounter()) // 1
console.log(newCounter()) // 2
console.log(newCounter()) // 3
console.log(newCounter()) // 4
console.log(newCounter()) // 5

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count = 0;
  return {
    increment: () => (++count),
    decrement: () => (--count),
  };
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

const newCounterFactory = counterFactory();
console.log(newCounterFactory.increment()); // 1
newCounterFactory.decrement(); // 0
newCounterFactory.decrement(); // -1
// Return a function that when invoked increments and returns a counter variable.




/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
//const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
//};
