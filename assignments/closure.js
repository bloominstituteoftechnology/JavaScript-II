// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function outer() {
  var b = 10;
  function inner() {
       
        var a = 20; 
        
   }
  return inner;
}
outer();

function home() {
  
  const dude = "guys";
  console.log(`What's up ${dude}`);
  
  
  function streets() {
    
    const gal = "girls";
    console.log(`The streets talking: What's up ${dude}`);
    
    
    function bar() {
      console.log(`The bar says: Stay and party ${dude}`);
      console.log(`The bar says: Stay and party ${gal}`);
      
    }
    
    bar();
  }
  
 streets();
}

home();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

