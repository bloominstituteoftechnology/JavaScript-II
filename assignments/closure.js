// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const countByX = (function(){
  let count = 0;
  return function(x){
    count += x; 
    return count;
  }
})();

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  return function(){count++;return count}
};

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count = 0;
  return {
    increment(){
      count++;
      return count;
    },
    decrement(){
      count--;
      return count;
    }
  }
};
