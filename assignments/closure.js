// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let count =  28;
function countMe() {
   let total= 100;
     total += count;
   console.log(total);
   }
 countMe();

//  Same Closure with Persistent total
let addNumber =  28;
function countMe() {
   let total= 100;
   return () => {
     total += addNumber;
   console.log(total);
   }
}
let newFun = countMe();
newFun();
newFun();
newFun();

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let counterNum = 0;
   return () => {
    counterNum ++;
    return counterNum;
   }  
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: 
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let countNum = 0;
  return {
    increment: function(){
      countNum++;
      return countNum;
    },
    decrement: function(){
      countNum--;
      return countNum;
    }
  }
};
let newC = counterFactory();
console.log(newC.increment());
console.log(newC.increment());
