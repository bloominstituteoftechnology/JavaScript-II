// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function sandwich(){
  console.log("I am a sandwich!");
  function bread(){
    console.log("I have two pieces of bread")
    function ham(){
      console.log("I am ham");
    }
    ham();
  }
  bread();
}
sandwich();
/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  return function() {
    count++;
    return count;
  }
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
newCounter = counter(); // Invokes counter: it is now the function which returns count++; with memory of count being 0;
console.log(newCounter()); // Calls counting function
console.log(newCounter());

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
    count: count,
    increment: function(){
      this.count++;
    },
    decrement: function(){
      this.count--;
    }
  }  
};
let newCountObject = counterFactory();
console.log(newCountObject);
newCountObject.increment();
newCountObject.increment();
console.log(newCountObject);