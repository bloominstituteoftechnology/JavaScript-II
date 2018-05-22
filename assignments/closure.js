// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const closure = () => {
  let sushi = 0;
    return function makeSushi() {
      return sushi += 1;
  }  
};
let sushi = closure();
console.log(sushi());
console.log(sushi());
console.log(sushi());
console.log(sushi());
console.log(sushi());




// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
    return function () {return count += 1;}
};

const newCounter = counter();
newCounter(); // 1
newCounter(); // 2
console.log(newCounter());


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
    increment() {
      console.log(++count);
    },
    decrement() {
      console.log(--count);
    },
  };
}

let count = counterFactory();

console.log(count);
count.increment();
