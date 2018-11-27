// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function giveName(firstName){
    return function giveFullName(lastName){
      return firstName + " " + lastName;
    }
}

//for testing purposes

var firstPart = giveName("Byron");
console.log(firstPart("Holmes"));

// ==== Challenge 2: Create a counter function ====
const counter = () =>{
  let count = 0;
   const addCount = () => {
    return count+=1;
  }
   return addCount;
}

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

//for testing purposes

const newCounter = counter();
console.log(newCounter());
console.log(newCounter());


/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count = 0;
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  const countMethods = {
    increment: function(){
      return count+=1;
    },
    decrement: function(){
      return count-=1;
    }
  }
  return countMethods;
};
//for testing purposes

const newCounter = counterFactory();
console.log(newCounter.increment());
console.log(newCounter.increment());
console.log(newCounter.decrement());

console.log(newCounter.decrement());
