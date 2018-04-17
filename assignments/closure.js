// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  }
  // Return a function that when invoked increments and returns a counter variable.
};
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = (function() {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let countNum = 0;
  function newNum(num) {
    countNum += num;
  }
  return {
    increment: function() {
      newNum(1);
    },
    decrement: function() {
      newNum(-1);
    },
    number: function() {
      return countNum;
    }
  };
})();
  
  // return {
  //   increment: function(){
  //     countNum++;
  //     return countNum;
  //   },
  //   decrement: function(){
  //     countNum--;
  //     return countNum;
  //   }
  // }
 
 counterFactory.increment();
 counterFactory.increment();
 counterFactory.increment();
 console.log(counterFactory.number());
 counterFactory.decrement();
 counterFactory.decrement();
 console.log(counterFactory.number());
 counterFactory.increment();
 counterFactory.increment();
 counterFactory.increment();
 console.log(counterFactory.number());