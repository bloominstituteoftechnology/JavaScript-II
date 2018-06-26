// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function fn () {
  let a = 1;
  function anotherFn () {
    // able to access a even though fn is pop in the callstack
    console.log(a);
  }
  anotherFn();
}

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let i = 0;
  const fn = function () {
    i ++;
    return i;
  };
  return fn;
};

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 0;
  return {
    increment: function () {
      counter ++;
      return counter;
    },
    decrement: function () {
      counter --;
      return counter;
    }
  }
};


// Testing

function eq (a, b) {
  if (a === b) {
    console.log(`%c Test Passed `, 'background: #222; color: lightgreen');
  } else {
    console.log(`%c Test Failed `, 'background: #222; color: red');
  }
}

const newCounter = counter();
eq(1, newCounter()); // 1
eq(2, newCounter()); // 2

const newCounterTwo = counterFactory();
eq(1, newCounterTwo.increment()) // 1
eq(2, newCounterTwo.increment()) // 2
eq(1, newCounterTwo.decrement()) // 1