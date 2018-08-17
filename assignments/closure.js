// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function name(person) {
  function displayName() {
    console.log(`Hi ${person}!`);
  }
  return displayName;
}

let hiAbi = name('Abi');
hiAbi();


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let total = 0;
  function count() {
    console.log(++total);
  }

  return count;
  // Return a function that when invoked increments and returns a counter variable.
};

let newCounter = counter();
newCounter();
newCounter();
newCounter();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = {
  total: 0,
  plusOne () {
      return this.total++;
  },
  minusOne () {
    return this.total--;
  }
};

let counting = counterFactory;
counting.plusOne();
counting.plusOne();
counting.plusOne();
counting.plusOne();
counting.plusOne();
counting.plusOne();
console.log(counting.total);
counting.minusOne();
console.log(counting.total);


