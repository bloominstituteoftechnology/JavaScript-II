// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const country = () =>{
  const president ="Obama"
  console.log(` ${president} has been voted in!`)
  const state =() =>{
    const governor ="Bob McGovern "
    console.log(`${president} has signed a new bill`)

    function city(){
      const newspaper = "News"
      console.log (`In the ${newspaper}, president  ${president} has signed a bill, and ${governor} endorses it as well.` )

    }
  }
}
/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count =0;
  return function(){
    return ++ count;
  }
};

  const newCounter = counter();
   
 
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count =0;
  function change(n){
    count += n;
  }
  return {
    increment: ()=>{
      change(1);
    },
  decrement : ()=>{
    change(-1);
  },
  value : ()=>{
    return count;
  }
}}
