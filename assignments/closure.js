// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const parent = () => {
  let value = "Jimbo";
  console.log("Parent has value", value);

  const child = () => {console.log("Child has same value as parent..." + value)};

  return child();
}

// ==== Challenge 2: Create a counter function ====

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  //let num = 0;
  const adder = () => {
    let num = 0;
    num++;
    console.log(num++)};

  return adder();

  //console.log(adder);
  //console.log(num);
  //return num;
};

const newCounter = counter();
//newCounter();
//newCounter();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

parent();
newCounter;
newCounter;
newCounter;
newCounter;
