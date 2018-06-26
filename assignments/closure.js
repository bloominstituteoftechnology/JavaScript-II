// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function add (x) {
  let addMe = x;

  return function (y) {
    return x + y;
  }
}

let adderFour = add(4);
let adderFive = add(5);
let adderten = add(10);
adderten(4);





// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let counter = 0;
  return function () {
    return ++counter;
  }
};
const newCounter = counter();
newCounter(); // 1
newCounter(); // 2






// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let increment = 0;
  let decrement = 0;
  return {
    more: function () {
      return ++increment;
    },
    less: function () {
      return --decrement;
    }
  }
};
