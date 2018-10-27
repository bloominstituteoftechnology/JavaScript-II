// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!


const bigbox = () =>{
  let random = 'randomness';
  const smallbox = () =>{
    let fibo = "patterns in randomness";
    return(`${random} ${fibo}`);
  }
  console.log(smallbox());
  return(random);
  }
  console.log(bigbox());



// ==== Challenge 2: Create a counter function ====
const counter= () => {
  let x = 0;
  // Closure here
  const newCounter= () => {
    return x = x + 1;
  }
  // newCounter();
  return newCounter;
}
const number = counter();

console.log(number());
console.log(number());

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
