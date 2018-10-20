// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function sayName(nameParameter) {
  const name = nameParameter;
  const slangGreeting = "sup";
  const properGreeting = "sir";

  console.log(`Hello there, ${name}.`);

  function slang() {
    console.log(`${name} my dude, ${slangGreeting}.`);

    function proper() {
      console.log(`Good day, ${properGreeting} ${name}.`)
    } proper(); // proper
  } slang(); // slang
} sayName("Connor"); // sayName

// ==== Challenge 2: Create a counter function ====
// const counter = () => {
//   // Return a function that when invoked increments and returns a counter variable.
//   const addOne = 0;
//   return function () {
//     addOne += 1;
//     return addOne;
//   }
// }();
// counter();
// counter();
// counter();

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
