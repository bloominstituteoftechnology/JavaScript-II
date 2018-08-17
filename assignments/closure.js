// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const firstname= ()=>{
  let first='Michael';
    
    const fullname =()=>{
      return first + ' ' + 'Trew';
    }
    return fullname;
  }
  
  let myName= firstname();
  myName();
  console.log(myName());


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0 ;
  const addone= () =>{
  return count ++;
  }
  return addone;
  };
  const newcounter1= counter();
  console.log(newcounter1());
  
  // Return a function that when invoked increments and returns a counter variable.

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
