// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
var counter = (function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    }
  };
})();
console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1


// ==== Challenge 2: Create a counter function ====
var closure = function () {
  let count = 0;
  return function () {
    count++;
    return count;
  }
};

const newCounter = closure();
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
  // `decrement` should decrement the counter variable and return it.'
  let count = 0;
  return {
    increment: function increment() {
      return ++count;
    },
    decrement: function decrement() {
      return --count;
    },
  }
};
const up = counterFactory();;
console.log(up.increment());
console.log(up.decrement());
console.log(up);