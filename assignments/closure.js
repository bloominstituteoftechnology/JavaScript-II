// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function birthday(age) {
  newAge = age + 1;
  debugger;

  function declareAge() {
    console.log(`Today is my birthday and I am ${newAge} years old!`)
    debugger;
  }
  declareAge()
}

birthday(25);
// ==== Challenge 2: Create a counter function ====
// Return a function that when invoked increments and returns a counter variable.

const counter = () => {
  let number = 0;
  return () => (++number)
};
const newCounter = counter();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
console.log(newCounter());
console.log(newCounter());


/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
 // Return an object that has two methods called `increment` and `decrement`.
const counterFactory = () => {
  let number = 0
  const newObj = {
    increment: function () {
    return number++
    },
   decrement: function () {
     return number--
    } 
  }
  console.log(newObj.increment());
  console.log(newObj.decrement());
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

counterFactory();


