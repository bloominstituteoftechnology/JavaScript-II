// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let thatVar = 5;
let thisFunc = () => console.log(thatVar); //?

thisFunc();


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let c = 0;
  return () => ++c;
};
const newCounter = counter();
newCounter(); //?
newCounter(); //?
newCounter(); //?


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  let c = 0;
  let object = {
    "increment": () => ++c,
    "decrement": () => --c
  };
  return object;
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

const changer = counterFactory();
changer.increment(); //?
changer.increment(); //?
changer.increment(); //?
changer.increment(); //?
changer.decrement(); //?
changer.increment(); //?
changer.decrement(); //?
changer.decrement(); //?
changer.decrement(); //?