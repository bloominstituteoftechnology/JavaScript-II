// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function favoriteAnimal() {
  const animal = 'bear';
  console.log(`My favorite animal is a ${animal}`)

  function diet() {
    const food = 'Salmon'
    console.log(`${animal.toUpperCase()}'s like to eat ${food}`)
  }
  diet()
}
console.log(favoriteAnimal())
// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;

  function counting() {
    count++;
    return count;

  }
  return counting;
};
const counter1 = counter();
const counter2 = counter();

// Return a function that when invoked increments and returns a counter variable nested function
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