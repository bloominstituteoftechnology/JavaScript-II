// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function parentCalling(first, second, last){
  const firstName = first;
  console.log(`Come here, ${firstName}!`);
  function angryParentCalling(){
    const secondName = second;
    const lastName = last;
    return `Come here now, ${firstName} ${secondName} ${lastName}!`;
  }
  return angryParentCalling();
}

const dontMakeMeCallForYouAgain = parentCalling('Sarah', 'Nicole', 'Tennis');

console.log(dontMakeMeCallForYouAgain);


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let myCounter = 0;
  function increment(){
    return ++myCounter;
  }
  return increment;
};

const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
// console.log(newCounter());
// console.log(newCounter());
// console.log(newCounter());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 0;
  return {
    increment: () => ++counter,
    decrement: () => --counter,
    showCounter: () => counter
  };
};

const myCounter = counterFactory();
// console.log("Starting: " + myCounter.showCounter());
// console.log(myCounter.increment());
console.log(myCounter.increment());
console.log(myCounter.decrement());
// console.log(myCounter.decrement());
// console.log(myCounter.decrement());
// console.log(myCounter.decrement());
// console.log(myCounter.decrement());
// console.log("I should be negative three...\n" + myCounter.showCounter() + "\n I AM!!!");