// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const getAge = (age) => {
  this.age = age;
  return isAdult(age);
}

const isAdult = (age) => {
  if (age > 17) {
    console.log('Welcome to our website');
  }else {
  console.log('Website cannot be accessed by minors!')
  }
}

getAge(16);
getAge(18);
// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let counter = 0;
  return () => { counter += 1; return counter}
}
const newCounter = counter();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
newCounter();
newCounter();
newCounter();
newCounter();
/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = (upDown ,num) => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
let counter = {
  increment : function(num) {
    num++;
    return num;
  },
  decrement : function(num) {
    num--;
    return num;
  }
}
let increment = counter.increment(num);
let decrement = counter.decrement(num);
if (upDown === 'increment') {
  return increment;
}
else {
  return decrement;
}
}
// counterFactory('increment', 5);
// counterFactory('decrement', 100);
// counterFactory('decrement', 8);
// counterFactory('increment', 5);
