// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function makeClosure(closeit) {
  return function(){
    return closeit + 10;
  };
}

var closeit5 = makeClosure(5);
var closeit10 = makeClosure(10);

console.log(closeit5());
console.log(closeit10());


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
   counterUp = 0;

  return function () {
    counterUp += 1;
    return counterUp;
  };
};
counter();
counter();
counter();


// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
