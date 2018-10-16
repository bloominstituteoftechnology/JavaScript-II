// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function myFunction(param){
  const month = param;
  console.log(`The orangest month of the year is ${param}`);

  function day(){
    const favDay = "31st";
    console.log(`Halloween is on ${month}, ${favDay}.`);

    function today() {
      const todayIs = "16th";
      console.log(`Today is ${month} the ${todayIs}.`);
    }
    today();
  }
  day();
}
myFunction('October');

// ==== Challenge 2: Create a counter function ====

const counter = (/*times, cb*/) => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  
  // for(let i = 0; i < times; i++){
  // return cb(() => (++count));
  // }
  return () => (++count);

  
  // function countIt() {
  //   return (++count);
  // }
  // countIt();
};

// function cbFunct() {
//   console.log(`Just some text`);
// }


// Example usage: 
const newCounter = counter();
// console.log(newCounter(3, cbFunct)); // 1
console.log(newCounter()); // 2
// console.log(newCounter()); // 3
// console.log(newCounter()); // 4

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

