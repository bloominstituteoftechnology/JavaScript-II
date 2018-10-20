// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function closureTest(){
  let test = "Does it work???"
  itWorks();
  function itWorks(){
    console.log(test)
  };
};

closureTest();

// ==== Challenge 2: Create a counter function ====
const newCounter = counter => {
  // Return a function that when invoked increments and returns a counter variable.
  increment();
  function increment(){
    count+=1;
    console.log(count)
  }
};
let count = 0;
newCounter();// 2
newCounter();
/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

const counterFactory = () => {
  let newCount = 0;

  return {
    increment: () => {
      newCount++;
      console.log(`the ${newCount}`);
    },
    decrement: () => {
      newCount--;
      console.log(newCount);
    }
  }
};

let counter = counterFactory();
counter.increment();
counter.increment();


  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
