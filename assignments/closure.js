// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

simpleClosureFunc = () => {
  let greeting = 'Hello Govenor!';
  
  return () => greeting;
}

let closureExample = simpleClosureFunc();

console.log(closureExample());


// ==== Challenge 2: Create a counter function ====
counter = () => {
  let count = 0;
  
  return  () => {
    count++;
    return count;
  }
}

const newCounter = counter();

console.log(newCounter());
console.log(newCounter());
console.log(newCounter());


// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {

  let counter = 0; 

  // Return an object that has two methods called `increment` and `decrement`.
  return {
    "increment": () => {
      counter++
      return counter;
    },

    // "getCounter": function () {
    //   return counter;
    // },

    "decrement": () => {
      counter--;
      return counter;
    }
  }

  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

let myObjCounter = counterFactory ();

// console.log(myObjCounter.getCounter());
console.log(myObjCounter.increment());
console.log(myObjCounter.decrement());
console.log(myObjCounter.increment());
console.log(myObjCounter.increment());
console.log(myObjCounter.increment());

// console.log(myObjCounter.getCounter());


