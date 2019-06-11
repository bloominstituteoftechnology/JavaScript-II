// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

// function sum(a) {
//   a;

//   function inside(b) {
//     b;
//     console.log(a + b);
//   }
//   return inside;
// }

function sum(a) {
  a;
  console.log('im the outter function')
  return function (b) {
    b;
    return (a + b);
  }
}

var addTwo = sum(2);
//console.log(sum(), 'test')
console.log(addTwo())
console.log(addTwo(1));
console.log(addTwo(4))


function nameCaller(name) {
  return function (greeting) {
    return `${greeting} ${name}!!!`
  }
}

console.log(nameCaller('Barney')('hola'));
console.log(nameCaller('Sandra')())
console.log(nameCaller()('Hello'));

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
let num = 0;
const counter = () => {
  num += 1;
  console.log(num);
  // Return a function that when invoked increments and returns a counter variable.
};

counter();
counter();
counter();

// Example usage: const newCounter = counter();
const newCounter = counter();
newCounter; // 1
newCounter; // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};