// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.

function sayHello(greet) {
  const yourGreeting = greet;
  const name = 'Pat';
  console.log(`${yourGreeting}. How's everything?`);

  function answer() {
    const myAnswer = "I'm ok, thanks";
    console.log(`${yourGreeting} ${name} ${myAnswer}`);
  }

  answer();
}

console.log(sayHello('Hola!'));

// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====

const counterMaker = () => {
  // IMPLEMENTATION OF counterMaker://
  let count = 0;
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  function counter(num){
    return num++;
  }
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.
  return counter();
};
// Example usage: const myCounter = counter();
console.log(counter()); // 1
console.log(counter()); // 2

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
// const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
// };
