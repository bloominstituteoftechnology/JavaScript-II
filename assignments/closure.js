// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const tellTriangleArea = (param1, param2) => { 
  let result;
  function findArea(param1, param2) {
    result = (param1 * param2)/2;
  }
    
  findArea(param1, param2);
  return `The area of your triangle is ${result}.`;
}
console.log(tellTriangleArea(2,3));
// console.log(result) // Doesn't work because closure ends with the tell TriangleAreafunction.

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
    let counter = 0;
      return function () {
              return counter += 1;
          }
};

const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
console.log(newCounter());


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 0;
    return {
        increment: function () {
            return counter += 1;
        },
        decrement: function () {
            return counter -= 1;
        },
    };
};

const counterUpOrDown = counterFactory();

console.log(counterUpOrDown.decrement())