// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

// function greeting(namePara, meal, beverage){
//   const name = namePara;
 

//   console.log (`hi ${name}`);

//   function eat(meal){
//     console.log(`${name}, eat your ${meal}`);

//     function drink (beverage) {
//       console.log(`${name}, drink your ${beverage}`);
//     }

//     drink(beverage);
//   }

//   eat(meal);
// }

// greeting ("ed", "dinner", "wine");



// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let i = 0;
  return (num1) => i = i+num1;
  };

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

const newCounter = counter();

console.log(newCounter(3));
console.log(newCounter(2));


function temp (){
  return 2;
}

const num = temp();




/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

  let i = 0;

  return {
    increment: function() {
      return ++i;
    },
    decrement: function() {
      return --i;
    }
  };
};

const newCounterFactory = counterFactory();

console.log(newCounterFactory.increment());
console.log(newCounterFactory.increment());
// console.log(newCounterFactory.increment());
// console.log(newCounterFactory.increment());
// console.log(newCounterFactory.decrement());
// console.log(newCounterFactory.decrement());
// console.log(newCounterFactory.decrement());
// console.log(newCounterFactory.increment());
// console.log(newCounterFactory.increment());

