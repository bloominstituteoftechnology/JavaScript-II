// ==== Challenge 1: Write your own closure ====
const helloPerson = () => {
    let name = 'Alex';
    const response = () => {
        return `Hello ${name}`;
    }
    
    return response;
}

const greeting = helloPerson();

console.log(greeting);

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  // Return a function that when invoked increments and returns a counter variable.
  function addOne(){
    return count++;
  }
  return addOne;
};
const newCounter = counter();
newCounter();

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
