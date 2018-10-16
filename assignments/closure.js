// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let donkeyNoise = 'hee haw';
function donkey() {
  return `${donkeyNoise}! ${donkeyNoise}! ${donkeyNoise}!`;
}

donkey();
// ==== Challenge 2: Create a counter function ====

const counting = () => {
  let count = 0;
  return () => ++count;
}
const newCounter = counting();
console.log(newCounter());
console.log(newCounter());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const countBoth = () => {

  let counted = 0;

  var increment = function() {

      ++counted;
      console.log('currentValue = ' + counted);
  };

  var decrement = function() {

      --counted;
      console.log('currentValue = ' + counted);
  }

  return {increment: increment,
          decrement: decrement};
};

const doubleCount = countBoth();
doubleCount.increment();
doubleCount.increment();
doubleCount.increment();
doubleCount.increment();
doubleCount.decrement();
doubleCount.decrement();
doubleCount.decrement();
doubleCount.decrement();
doubleCount.decrement();
doubleCount.increment(5);

  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

