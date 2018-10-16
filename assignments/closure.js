// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function sayHello() {
  let employee = "Dwight Schrute";
  let job = "Salesman";
  console.log(`Hello, my name is ${employee}. I am a ${job}.`);
  function newJob() {
    let newJob = "Assistant Regional Manager";
    console.log(`Hello, my name is ${employee}. I am now an ${newJob}.`);

    function demotion() {
      let demotedJob = "Assistant to the Regional Manager";
      console.log(`Hello, my name is ${employee}. I am now an ${demotedJob}. =( `);
    }
    demotion();
  }
  newJob();
}

sayHello();


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;

  return () => (++count);
};
// Example usage: 
const newCounter = counter();
newCounter(); // 1
newCounter(); // 2




/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
    increment: function() {
      return ++count;
    },
    decrement: function() {
      return --count;
    }
  }
};

let counting = counterFactory();

console.log(counting.increment(0)); // 1
console.log(counting.increment(0)); // 2
console.log(counting.increment(0)); // 3
console.log(counting.increment(0)); // 4
console.log(counting.decrement(0)); // 3
console.log(counting.decrement(0)); // 2
console.log(counting.decrement(0)); // 1