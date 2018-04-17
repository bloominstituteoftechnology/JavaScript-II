// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

let userCreater = function(password) {
  let encryptPass = password.split("").reverse().join(""); // encrpyted password
  return function(username) {
    return {
      name: username,
      password: encryptPass
    }
  }
};

let myUser = userCreater("abc123");
let xang = myUser("Xang");
console.log("My own simple closure");
console.log(xang);

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function() {
    count++;
    return count;
  }
};

console.log("Challenge 2 counter function");
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
    increment: function() {
      count++;
    },

    decrement: function() {
      count--;
    },

    getCount: function() {
      return count;
    }
  }
};

let myCounter = counterFactory();
myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.decrement();
myCounter.decrement();
console.log("Challenge 3 counter function result");
console.log(myCounter.getCount());
