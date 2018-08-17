// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function greetingBuilder(name) {
    function greet() {
        return `Hello, ${name}`;
    }
    return greet;
}

const greetMe = greetingBuilder('Kurt');
console.log(greetMe());


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  const cnt = () => {
    return ++count;
  };
  return cnt;
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
console.log("\nCounter example");
const myCounter = counter();
console.log(myCounter());
console.log(myCounter());


/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks
   for today's project files */

// ==== Challenge 3: Create a counter function with an object that can
//      increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  let counter = {
    increment: () => {
        return ++count;
    },
    decrement: () => {
        return --count;
    },
    value: () => {
        return count;
    },
  };
  return counter;
};

const myCounterObject = counterFactory();
console.log("\ncounterFactory");
console.log(`initial value: ${myCounterObject.value()}`);
console.log(`increment: ${myCounterObject.increment()}`);
console.log(`increment: ${myCounterObject.increment()}`);
console.log(`decrement: ${myCounterObject.decrement()}`);
console.log(`decrement: ${myCounterObject.decrement()}`);
console.log(`decrement: ${myCounterObject.decrement()}`);

