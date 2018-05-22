// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function add(firstNum, secondNum) {
  let thirdNum = 10;
  console.log(firstNum + secondNum);

  function subtract() {
    console.log(firstNum - thirdNum);
  }
  return subtract();

}

add(50, 20); //?


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let num = 0;
  function newCounter() {
    return num++; //?
  }
  return newCounter; //?
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

const newCounter = counter();
newCounter(); //?
newCounter(); //?
newCounter(); //?




// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let num = 0;
  function increment() {
    return num++; //?

    function decrement() {
      return num--; //?
    }
    return decrement; //?
  }
  return increment; //?
};

counterFactory(); //?
