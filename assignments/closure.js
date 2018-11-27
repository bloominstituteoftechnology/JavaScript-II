// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function nameChangeCase(string) {
  const name = string;
  console.log(`Name to change the case of is ${name}`);
  // debugger;

  function upper(){
    const upper = name.toUpperCase();
    console.log(`${upper} is your name in uppercase!`);
    // debugger;

    function lower(){
      const lower = name.toLowerCase();
      console.log(`${lower} is your name in lowercase!`);
      // debugger;
    }

    lower();

  }

  upper();
}

nameChangeCase('Michael');

// ==== Challenge 2: Create a counter function ====
const counter = (() => {
  // Return a function that when invoked increments and returns a counter variable.
  var currentCount = 0;
  return () => {
    currentCount += 1;
    console.log(currentCount);
  }
})();

const newCounter = () => {
  counter();
};
// Example usage: const newCounter = counter();
newCounter(); // 1
newCounter(); // 2
newCounter(); // 3

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
//const counterFactory = (() => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
//   var current = 0;
  
//   let counting = {};
//   counting.prototype.increment = function() {
//     current++;
//     console.log(current);
//   }
//   counting.prototype.decrement = function() {
//     current--;
//     console.log(current);
//   }
//   return counting;
// })();

// const newFactory = () => {
//   counterFactory();
// }

// newFactory.increment();
// newFactory.increment();
// newFactory.increment();
// newFactory.decrement();

//STRETCH GOAL PLAY WITH IIFE

//IIFE (Immediately Invoked Function Expression)
let person = ((n) => {
  //This is declared when the function is created/initialized.
  //These variables even though they are var are not available outside of the IIFE.
  //The IIFE stores the variables that are initialized at runtime and do not
  //change them upon invoking them. You can call the function again how ever many times you want
  //and variables well not be redeclared, but they can be changed like they are here in the return statement that passes
  //a function.
  var personName = n;
  var age = 50;
  return () => {
    name = n;
    age = Math.floor(Math.random() * 80);
    personObject = {
      name,
      age
    };
    console.log(personObject);
  }
})('Bobby');//Arguments you want available to the IIFE function parameters go here - will be passed to n in this case.

person();

console.log(personName); //This is undefined(and errors in our console), even though it's declared as a var in person()
                         //This is because what is initialized inside of an IIFE, stays in an IIFE (Except what is returned)