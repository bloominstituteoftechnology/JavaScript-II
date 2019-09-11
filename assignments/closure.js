// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let scoot = "Ride sharing service in SF for electric scooters";
function whatIsScoot(){
  return scoot;
}
console.log(whatIsScoot());

// ==== Challenge 2: Create a counter function ====
const counter = (closure = 0) => {
  // Return a function that when invoked increments and returns a counter variable.
  let val = closure;
  return function counter(){
    val += 1;
    console.log(val);
    return val;
  }
};
const newCounter = counter();
// Example usage: const newCounter = counter();
newCounter(); // 1
newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  let counter = 0;
  console.log(counter);
  let increment = () => counter += 1;
  let decrement = () => counter -= 1;
  let resObj = {increment , decrement};
  // `increment` should increment a counter variable in closure scope and return it.
  
  // `decrement` should decrement the counter variable and return it.
  return resObj;
  
};
  let foo = counterFactory();
  
  console.log(foo.decrement());
  console.log(foo.increment());
  // return resObj;
