// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function layerOne(holder) {
  const top = holder;
  console.log(`${top}`);

  function layerTwo() {
    const middle = "This is the middle";
    console.log(`${top} and ${middle}`);

    function layerThree() {
      const bottom = "This is the bottom";
      console.log(`${top} and ${middle} and ${bottom}`);
    }
    layerThree();
  }
  layerTwo();
}

layerOne("This is the top");


// ==== Challenge 2: Create a counter function ====

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function () {
    return ++count;
  };
};

const newCounter = counter();
console.log(newCounter()); // returns 1
console.log(newCounter()); // returns 2
console.log(newCounter()); // returns 3

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