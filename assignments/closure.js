// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.
function godThreat() {
  const god = "I am a God Threat monster";
  console.log(`Fear me, for ${god}`);

  function dragonThreat() {
    console.log(`I am a Dragon Threat. Only those who can say ${god} are stronger than me`);
  }
  dragonThreat();
}
godThreat();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */





// ==== Challenge 2: Implement a "counter maker" function ====

  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.
const counterMaker = () => {
  let count = 0;
  return function() {
    count = count +1;
    return count;
  }
};

let counter = counterMaker

console.log(counter);







// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.




const countToFive = () => {
  let count = 0;
  return function() {
    return count++;
  }
};

// console.log(countToFive());
// console.log(countToFive());
// console.log(countToFive());
// console.log(countToFive());




// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
