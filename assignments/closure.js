// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function parentFunction() {
  let myValue = "Hahaha";
  console.log("Parent: " + myValue);

  function childFunction() {
    console.log("Child: " + myValue + "ha");
  }
  return childFunction();
}

parentFunction();

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return () => {
    count++;
    return count;
  }
};

const newCounter = counter();
newCounter(); //?
newCounter(); //?
newCounter(); //?
newCounter(); //?
newCounter(); //?
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  const increment = () => {
    count++;
    return count;
  }
  const decrement = () => { 
    count--;
    return count;
  }
  return Object({
    increment,
    decrement
  });
}

const counter2 = counterFactory();
counter2.increment(); //?
counter2.decrement(); //?
counter2.increment(); //?
counter2.increment(); //?
counter2.increment(); //?
counter2.decrement(); //?
counter2.decrement(); //?
counter2.decrement(); //?