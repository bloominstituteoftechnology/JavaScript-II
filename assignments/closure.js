// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

const closure = () => {
  let closureData = '';
  return data => (closureData += data);
};

const mytestClosure = closure();
console.log(mytestClosure('Hi!'));
console.log(mytestClosure(" ...here we are again hi"));

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.
  let count = 1;
  return () => {
    return count++;
  };
};

// Example usage: const myCounter = counterMaker();
// myCounter(); // 1
// myCounter(); // 2
console.log('Counter V1');
const mycounter = counterMaker();
console.log(`This should be 1: ${mycounter()}`);
console.log(`This should be 2: ${mycounter()}`);

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.
const counterMaker2 = (limit = 10) => {
  let count = 1;
  return () => {
    return count > limit ? (count = 1) : count++;
  };
};

console.log('Counter V2');
const counterV2 = counterMaker2(2);
console.log(`This should be 1: ${counterV2()}`);
console.log(`This should be 2: ${counterV2()}`);
console.log(`This should be 1: ${counterV2()}`);

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFunction = (limit = 10) => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
    increment: () => {
      count = count >= limit ? 1 : count + 1;
      return count;
    },
    decrement: () => {
      count = count >= limit ? 0 : count - 1;
      return count;
    },
  };
};

console.log('Counter V3');
const counterV3 = counterFunction();
console.log(`This should be 1: ${counterV3.increment()}`);
console.log(`This should be 2: ${counterV3.increment()}`);
console.log(`This should be 1: ${counterV3.decrement()}`);