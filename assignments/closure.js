// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function add (x) {
   return function (y) {
    return x + y;
  }
}
const addThree = add(3);
const addSix = add(6);
const addTen = add(10);
console.log(addThree(2));
console.log(addTen(2));
console.log(addSix(2));

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const increment = (function(count) {
  return function() {
    count += 1;
    return count;
  }
}(0)); 

console.log(increment());
console.log(increment());
console.log(increment());

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
