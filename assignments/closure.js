// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function myFunction() {
  let myName = 'Alex';
  console.log("Hello " + myName);
    function farewell(){
      console.log("Goodbye " + myName);
    }
  return farewell();
}

myFunction();

// ==== Challenge 2: Create a counter function ====



const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return () => {
    count++;
    return count;
  }
}

// function counter() {
//   // Return a function that when invoked increments and returns a counter variable.
//   let count = 0;
//   count++;
//   return count;
// }

const newCounter = counter();

// Example usage: const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2
console.log(newCounter());
console.log(newCounter());


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  let increment = () => {
    count++;
    return count;
  }
  let decrement = () => {
    count--;
    return count;
  }
  let anObj = {increment, decrement};

  return anObj;
};

let bestCounter = counterFactory();

console.log(bestCounter.increment());
console.log(bestCounter.increment());
console.log(bestCounter.decrement());

//I'm confused about why the object is neccessary
