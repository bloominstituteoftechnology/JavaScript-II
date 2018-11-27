// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function greetUser(username, UserAuthentication){
  let userAuth = UserAuthentication;
  const usernameHolder = username;
  if(userAuth == 0){
    console.log(`Hello ${usernameHolder}`);
  debugger;
  }
  function signOut(){
    const goodbyeString = "Goodbye, please visit us again"
    console.log(`${goodbyeString} ${usernameHolder}`)
    userAuth = 1;
    debugger;
    function welcomeBack(){
      const welcomeBackString = "Welcome Back,";
      console.log(`${welcomeBackString} ${usernameHolder}`)
    }
    welcomeBack();
  }
  signOut();
}

greetUser("Kieran", 0);

// ==== Challenge 2: Create a counter function ====
const counter = (() => {
    // Return a function that when invoked increments and returns a counter variable.
    let counter = 0;
    return function () {
      counter += 1; 
      return counter;
    }
})();

counter();
counter();

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = (() => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 0;
  return {
    "increment": function(){
      counter += 1; return counter;
    },
    "decrement": function(){
      counter --; return counter;
    }
  }
})();
