// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let name = 'Joseph Stanfield';
let question = 'What is your name?'
let greet = () => {
  return (`Hello, my name is ${name}. ${question}`)
}

console.log(greet())


// ==== Challenge 2: Create a counter function ====

const counter = () => {
  let count = 0;
  return () => (++count);
};



// const newCounter = counter();
console.log(counter()());





// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
let count = 0;
let increment = () => {
  return () => (++count);
}
let decrement = () => {
  return () => (--count);
}
const counterFactory = (param, cb) => {
  return (cb(param));
};

  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.


  correct = (string) => {
    let S = string.replace(/5/gi, 'S');
    let I = string.replace(/1/gi, 'I');
    let O = string.replace(/0/gi, 'O');
    
    return S && O && I;
    
    
    
  }


console.log(correct("51NGAP0RE"));

