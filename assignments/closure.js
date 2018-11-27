// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const hobbits = 'hobbits';
function logHobbits() {
  console.log(hobbits);
};
logHobbits();

// ==== Challenge 2: Create a counter function ====
// const counter = () => {
//   // Return a function that when invoked increments and returns a counter variable.
// };

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

//^^ I don't really get what I'm supposed to do with any of that so I'm just going to write my own from scratch vv

let counter = 0;
function newCounter(){
  counter += 1;
  return counter;
}

newCounter();
newCounter();
newCounter();
console.log(counter);
//should be 3
newCounter();
newCounter();
newCounter();
console.log(counter);
//should be 6



/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// const counterFactory = () => {
//   // Return an object that has two methods called `increment` and `decrement`.
//   // `increment` should increment a counter variable in closure scope and return it.
//   // `decrement` should decrement the counter variable and return it.
// };
