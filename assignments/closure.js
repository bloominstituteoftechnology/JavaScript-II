// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const isPeachy = () => {
  const peachy = " is Peachy.";

  const peachyGreeting = (name) => { 
    console.log(name + peachy) ;
  }
  return peachyGreeting;
}

const benPeachy = isPeachy();
benPeachy("Ben");

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  return () => { return ++count }
};

const benCounter = counter();
console.log(benCounter());
console.log(benCounter());
console.log(benCounter());
console.log(benCounter());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
    increment: () => { return ++count },
    decrement: () => { return --count }
  }
};
const newCount = counterFactory();
console.log(newCount.increment());
console.log(newCount.increment());
console.log(newCount.decrement());
console.log(newCount.decrement());