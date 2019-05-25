// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function greatfood() {
let icecream = 'praline pecan'
  function favorite() {
    console.log(`My favorite flavor is ${icecream}`)
}
  return favorite()
}

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
function counter (){
  let counter = 0;
  function counterinc (){
    counter++;
    return counter
  }
  return counterinc;
}


// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = function() {
  let counter = 0
  let countobject = {
    increment: function() {
      counter ++;
      return counter;
    },
    decrement: function() {
      counter --;
      return counter;
    }
  }
  return countobject
}
const mynewFunct = counterFactory()
console.log(mynewFunct.increment())
console.log(mynewFunct.increment())
console.log(mynewFunct.increment())
console.log(mynewFunct.decrement())
console.log(mynewFunct.decrement())



  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
// };
