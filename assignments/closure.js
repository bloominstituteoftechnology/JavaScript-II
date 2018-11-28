// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function bestFood(food) {
  const foodName = food;
  console.log(`${foodName} is very delicious!`);
   function highCalorie() {
    const highCalorie = "Burger and Fries";
    console.log(`${highCalorie} is a high calorie meal. You need to eat more healthy food like ${foodName}.`)
     function onDiet() {
      const makeChanges = "healthier lifestyle."
      console.log(`You need to reduce meals like ${highCalorie}? You need to practice a ${makeChanges} You can try substituting ${highCalorie} for ${foodName}.`)
    }
     onDiet();
  }
  highCalorie();
}
bestFood("Spaghetti");


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function(){
    count++;
    return count;
  }
};
const increment = counter();
console.log(increment());
console.log(increment());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

