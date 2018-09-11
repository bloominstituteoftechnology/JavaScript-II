// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function armory(weapon) {
  const addedWeapon = weapon;

  function weaponLog() {
    console.log(`Thanks for donating your ${weapon} to the Armory`)
  };

  weaponLog();
}

armory('sword');


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function() {
      count++;
      console.log(count)
      return count;
  }
};

const increment = counter();

increment(); // 1
increment(); // 2
increment(); // 3

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