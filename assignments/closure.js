// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function nameChangeCase(string) {
  const name = string;
  console.log(`Name to change the case of is ${name}`);
  // debugger;

  function upper(){
    const upper = name.toUpperCase();
    console.log(`${upper} is your name in uppercase!`);
    // debugger;

    function lower(){
      const lower = name.toLowerCase();
      console.log(`${lower} is your name in lowercase!`);
      // debugger;
    }

    lower();

  }

  upper();
}

nameChangeCase('Michael');

// ==== Challenge 2: Create a counter function ====
const counter = (() => {
  // Return a function that when invoked increments and returns a counter variable.
  var currentCount = 0;
  return () => {
    currentCount += 1;
    console.log(currentCount);
  }
})();

const newCounter = () => {
  counter();
};
// Example usage: const newCounter = counter();
newCounter(); // 1
newCounter(); // 2
newCounter(); // 3

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let current = 0;

  const increment = () => {
    current++;
    return current;
  }

  const decrement = () => {
    current--;
    console.log(current);
  }
};