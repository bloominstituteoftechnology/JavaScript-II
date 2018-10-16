// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function howOld (){
  const age = 27;
  console.log(`I am ${age}`)

  function ageAndBirth (){
    const dob = 'July 25, 1991';
    console.log(`I am ${age} and was born on {dob}`)
  }
}

howOld();

// ==== Challenge 2: Create a counter function ====
const counter = (function(count) {
  
    return function() {
      return count += 1;
      }
 }(0));

 counter();


/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
