// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function sayHello(hello){
  const say = hello;
  console.log(`${say}`);

  function whatsUp(){
    const item = "what's up?";
    console.log(`${say} ${item}`)
  }
  whatsUp();
}

sayHello('Hey');


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  return () => (++count)
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
 //newCounter(); // 1
 //newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  let increment = () => ++count;
  let decrement = () => --count;

  let object = {increment, decrement};
  return object
};
let counter2 = counterFactory();

console.log(counter2.increment());
console.log(counter2.decrement());
console.log(counter2.decrement());
console.log(counter2.decrement());