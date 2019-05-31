// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function goodMorn(timeOfDay) {
  const mornNight = timeOfDay
  console.log(`Good ${mornNight}, Wanda!`)
}

goodMorn('evening')

// ==== Challenge 2: Create a counter function ====
const counter = () => {
// Return a function that when invoked increments and returns a counter variable.

  let count = 0;
  return () => {
    count++;
    return count;
  };
};
// Example: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
console.log(newCounter()); //need to call newCounter as function
console.log(newCounter());

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
    increment: () => (++count), //pre-increment
    decrement: () => (--count),
  };
};

//++x (pre-increment) means "increment the variable; the value of the expression is the final value"
//x++ (post-increment) means "remember the original value, then increment the variable; the value of the expression is the original value"
