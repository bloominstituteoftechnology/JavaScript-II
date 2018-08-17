// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const newMessagesFor = (name) => { 
  const alertUser = (numOfMessages) => {
    return `Welcome back, ${name}. You have ${numOfMessages} new messages.`;
  }
  return alertUser;
}

const andres = newMessagesFor('Andres');
console.log(andres(3));

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  const addCount = () => {
    count++;
    console.log(count);
  }
  return addCount;
};
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