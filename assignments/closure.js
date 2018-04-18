// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let gender = 'I am male'
let surgery = () => {
  let gender = 'I am female'
  return function () {
    console.log(gender);
}}
console.log(gender)
trans = surgery();
console.log(trans());

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  return function (){
    count ++
    return count
  }
  // Return a function that when invoked increments and returns a counter variable.
};

let newCounter = counter()
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  let math = {
    increment: function (){
      count ++;
      return count;
    },
    decrement: function (){
      count--;
      return count;
    }
  }
  return math;
};

let mathematics = counterFactory()
console.log(mathematics.increment());
console.log(mathematics.increment());
console.log(mathematics.decrement());