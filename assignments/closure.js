// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function awesomeFunc(){
  let awesome = 'Awesome'
  function awesomeSAUCE(){
    console.log(`${awesome} sauce!`);
  }
  awesomeSAUCE();
}
awesomeFunc();

// ==== Challenge 2: Create a counter function ====
const counter = (x) => {
  // Return a function that when invoked increments and returns a counter variable.
 let add = function(){
  let newCount = x + 1;

  console.log(newCount);
}
 add();

};
counter(9);

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
