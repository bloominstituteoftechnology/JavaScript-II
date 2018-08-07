// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let userName = 'GolemSlayer552';

function welcomeUser() {
  console.log("Welcome back to the Dark Dungeon " + userName + "!");
}

welcomeUser(userName);

// ==== Challenge 2: Create a counter function ====
let countedTimes = 0;

const counter = () => {
  countedTimes++;
  console.log(countedTimes);
};

counter();
console.log("You've invoked me once. Hurray.");
counter();
console.log("You've invoked me twice, I don\'t think you need to do it anymore haha..");
counter();
console.log("You've invoked me three times, please stop.");
counter();
console.log("You've invoked me one too many times. User, this isn\'t funny anymore.");


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
