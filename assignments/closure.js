// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const thorOdinsonBestLine=()=>{
  let quote='Bring me Thanos!';
  return ()=>{alert(quote);}
}
// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let counter=0;
  return ()=>{counter++;return counter;}
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  counter=0;
  return {
    "increment":()=>{counter++;return counter;},
    "decrement":()=>{counter--;return counter;}
  }
};
