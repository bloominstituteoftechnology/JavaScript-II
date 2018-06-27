// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const greetings = () => {
  let name = "Lauren";

  return {
    hi: function () {
      return `hi ${name}`;
    },
    bye: function () {
      return `bye ${name}`;
    }
  }
}

// ==== Challenge 2: Create a counter function ====
let num = 0;
const counter = () => ++num;
const newCounter = counter;
console.log(newCounter()); // 1
console.log(newCounter()); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let counter = 0;

  return {
    increment: function() {
      return counter +=1;
    },
    decrement: function() {
      return counter -=1;
    }
  }
};

