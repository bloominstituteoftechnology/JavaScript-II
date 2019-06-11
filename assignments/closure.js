// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function calorieCounter (name){
  let calorieMessage = `Hello ${name} your current calories for the day are `
  currentCount = 0;
  const addCalories = (calorieAmount) => {
    currentCount += calorieAmount;
    console.log(calorieMessage + currentCount);
  }
  return addCalories;
  }

let myCalories = calorieCounter('Armando');
console.log(myCalories(250));
console.log(myCalories(250));
console.log(myCalories(250));




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
