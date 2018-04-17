// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function profile() {
  let newProfile = function(){console.log("Hello, My name is John and I am from Columbus,OH");
}
let greeting = 'Hello, How are you doing';  
return newProfile;
}
let newGreeting = profile();
console.log(newGreeting()); 


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
console.log(newCounter());


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return () => {
    count++;
    return count;
  }
};

const reverseCounter = () => {
  let count = 0;  
  return () => {
    count--;
    return count;
  }
};


const newCounterFactory = counterFactory();
const reverseNewCounterFactory = reverseCounter();
console.log(newCounterFactory());
console.log(newCounterFactory());
console.log(newCounterFactory());
console.log(reverseNewCounterFactory());
console.log(reverseNewCounterFactory());
console.log(newCounterFactory());
console.log(reverseNewCounterFactory())