// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
  function simple(x) {
    const newNum = x
    console.log(x)

      function multiple() {
        const y = 7
        console.log(x,y)
      }
      multiple();
  }
simple(7);

// ==== Challenge 2: Create a counter function ====
let counter = 0;
function increase() {
  return counter++;
}
increase();
increase();
increase();
increase();
console.log(counter)
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
