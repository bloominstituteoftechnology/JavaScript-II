// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function myClosure() {
  const  name = "Talent"; // name is a local variable created by closure declare as a function
  function displayName() { // displayName() is the inner function, a closure
      console.log(name); // displayName() uses variable declared in the parent function    
  }
  displayName();    
}
myClosure();
// ==== Challenge 2: Create a counter function ====
  // Return a function that when invoked increments and returns a counter variable.
// Example usage: const newCounter = counter();
const counter = () => {
 let  counter  = 0;
          return function newCounter(){
            ++counter;
          }
        }; 
        newCounter = counter()
          
   console.log(newCounter())// 1)
   console.log(newCounter())// 1)


/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // const arr = newParamArr.map((value, index) => ({[value]: paramArr[index]}))
  // Increment

      let a = 1;

      console.log(a++);    // 1
      console.log(a);      // 2

      // Decrement

      let b = 1;

      console.log(b--);    // 1
      console.log(b);      // 0

  // `decrement` should decrement the counter variable and return it.
    
