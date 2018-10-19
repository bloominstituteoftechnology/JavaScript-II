// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const totalLength = (arr1, arr2) => {
  const length1 = arr1.length;
  const length2 = arr2.length;
  const addLengths = () => {
    //closures: length1 and length2
    return length1 + length2;
  } 
  return addLengths();
}

console.log(totalLength([1,2,3], [4,5,6]));

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return () => {
    count++;
    return count;
  }
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

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
  return {
          increment: increment, 
          decrement: decrement
        };
};

const operationObj = counterFactory();
console.log("*****");
console.log(operationObj.increment());
console.log(operationObj.increment());
console.log(operationObj.increment());
console.log(operationObj.increment());
console.log(operationObj.decrement());
console.log(operationObj.decrement());
console.log(operationObj.increment());



