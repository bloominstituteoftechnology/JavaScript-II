// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function multiply(x){
  return function (y) {
    return x * y; 
  };
}

let multiply2 = multiply(2);
// console.log(multiply2(4)); // returns 8. 

// ==== Challenge 2: Create a counter function ====
const counter = () => {
   let y = 0; 
  // Return a function that when invoked increments and returns a counter variable.
  return function() {
    return y++; 
  }
};
let addBy1 = counter();  
console.log(addBy1());  
console.log(addBy1());  
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let x = 0;
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  return {
    increment() {
      return ++x; 
    }, 
  decrement() {
    return --x; 
  }
  }
};

let count = 8; 
let test =  counterFactory() ;
// console.log(test.increment());
// console.log(test.increment());
// console.log(test.increment());
// console.log(test.increment());
// console.log(test.increment());
// console.log(test.increment());
// console.log(test.increment());
// console.log(test.decrement());
// console.log(test.decrement());
// console.log(test.decrement());
// console.log(test.decrement());

let test2 = counterFactory(); 
// console.log(test2.increment());
// will allow you to create multiple variables storing the information separately. 
 
