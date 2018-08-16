// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const logFactory = (logType) => {
  const type = `${logType.toUpperCase()}: `;
  return message = (msg) => {
    console.log(`${type}${msg}`);
  } 
}
const errorLog = logFactory("error");
errorLog('This is really bad');
errorLog('Seriously bad');

const successLog = logFactory("success");
successLog('This is really good');
successLog('Seriously good');

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  const increment = () => {
    return ++count;
  }
  return increment;
};
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  const decrement = () => {
    return --count;
  }
  const increment = () => {
    return ++count;
  }
  return {decrement: decrement, increment: increment};
};

const countLog = logFactory("count");
const count = counterFactory();
countLog(count.increment());
countLog(count.increment());
countLog(count.decrement());
countLog(count.decrement());
countLog(count.decrement());
