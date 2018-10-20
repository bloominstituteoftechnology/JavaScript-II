// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function displayMyName(firstName, lastName) {
  const introduction = "Hi, my name is"; //free variable that myName can access
  function myName() {
    return `${introduction} ${firstName} ${lastName}!`;
  }
  return myName(); // closure, called function uses variable from enclosing function
}

const checker = displayMyName('Ira','Sanchez');
console.log(checker);


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Variable 
  let count = 0;
  // newCounter( Function iterates value 
    // Function uses variable above);
  return function () {
    return count++;
  }
};

const newCounter = counter();
console.log(newCounter())
console.log(newCounter())
console.log(newCounter())
console.log(newCounter())
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
