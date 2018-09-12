// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function greeting(namePara) {
  const name = namePara;
  const welfareCheck = 'How are you doing today';
  console.log(`Hey, ${name}!`);


  function ask() {
    console.log(`${welfareCheck}, ${name}?`);

  } // ask

  ask();
} //greeting

greeting('Kyran');


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  return increment = () => {
    return count += 1;
  };
}
//
// const newCounter = counter();
//
// console.log(newCounter ());
// console.log(newCounter ());
// console.log(newCounter ());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
const counterFactory = () => {
let newCounter = {
    increment: countItUp = (num) => {
      let count = num;
      return increment = () => {
        return count += 1;
    };
  },
  decrement: countItDown =(num) => {
    let count = num;
    return decrement = () => {
      return count -= 1;
    };
  }
};
  return newCounter;
  }

// Testing:
console.log(counterFactory());
console.log(counterFactory().increment());


  const isItWorkingIncrement = counterFactory().increment(1);

  const isItWorkingDecrement = counterFactory().decrement(10);


  console.log(isItWorkingIncrement());
  console.log(isItWorkingIncrement());
  console.log(isItWorkingIncrement());

  console.log(isItWorkingDecrement());
  console.log(isItWorkingDecrement());
  console.log(isItWorkingDecrement());
