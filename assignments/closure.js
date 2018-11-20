// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const hello = 'Hellloooo !'
function logHello() {
  return hello;
}
console.log(logHello());

// ==== Challenge 2: Create a counter function ====
const counter = (closure = 0) => {
  let val = closure;
  return function counter() {
    val += 1;
    console.log(val);
    return val;
  }
}
const newCounter = counter();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  let counter = 0;
  let increment = () => counter += 1;
  let decrement = () => counter -= 1;
  let resObj = { increment, decrement };
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  return resObj;
};
let foo = counterFactory();
console.log(foo.decrement());
console.log(foo.increment());
