// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function outer() {
  let outervar = "cat";
  function inner() {
    let innervar = "dog";
    console.log(`${outervar} ${innervar}`);
  }
  inner()
}

outer()


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0 
  // Return a function that when invoked increments and returns a counter variable.
  const counting = () => {
    count = count + 1;
    return count; 
    }
    counting();
   
};


// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count = 0;
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

let obj = {
  'increment': function() { return count++},
  'decrement': function() { return count--}
  }
  
return obj;

};



