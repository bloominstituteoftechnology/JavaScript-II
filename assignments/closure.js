// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function rapperString() {
  return(`lil ${string} `);
}
let string = 'bunny';
console.log(rapperString());

// ==== Challenge 2: Create a counter function ====
// ==== Challenge 2: Create a counter function ====
let count=0;
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  return count+=1;
};
counter();
counter();
console.log(counter()); // 3
console.log(counter()); // 4


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 0;
  return {
      increment: () => (counter += 1),
      decrement: () =>(counter -= 1)
    }
} 

const cf = counterFactory();

cf.increment(); // 1
console.log(cf.increment()); // 2
cf.decrement(); // 1
console.log(cf.decrement()); // 0
