// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function parentFunction(param1, param2) {
  let myValue = "Joe";
  console.log("parent: " + myValue);

  function childFunction() {
    console.log("Child: " + myValue + " " + param1);
   
  }
  return childFunction();
}
parentFunction();

// ==== Challenge 2: Create a counter function called 
const counter = () => {
  let num = 0;
  return () => (num++);
};

const newCounter = counter();

console.log(newCounter());
console.log(newCounter());
console.log(newCounter());








// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let num = 0;
  return () => (newObj = {
    "increment": () => (++num),
    "decrement": () => (--num),

  });

};
let newObj = counterFactory();
newObj();

console.log(newObj.increment());
console.log(newObj.increment());
console.log(newObj.decrement());

