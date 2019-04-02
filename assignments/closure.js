// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let firstFunction = function(){
  var index = 'result 1';
  return function(){
    return index;
    } 
  }
  let secondFunction= function(){
    var index = 'result2 ';
    console.log (firstFunction()());
  }
  secondFunction();



/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
  


function counter() {
  var currentCount = 1;

  return function() {
    return currentCount++;
  };
}

var newCounter = counter();

console.log(newCounter() ); // 1
console.log(newCounter() ); // 2
console.log(newCounter() ); // 3

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
