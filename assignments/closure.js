// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

let whereIAm = 'Boo I\'m outside';

function whereAreYou() {
  whereIAm = 'Don\'t be scare I\'m inside';
  console.log(whereIAm);
  // function scope
}

console.log('\n==== Challenge 1: Write your own closure ====\n')
console.log(whereIAm);
whereAreYou();


// ==== Challenge 2: Create a counter function ====
console.log('\n==== Challenge 2: Create a counter function ====\n')

const counter = () => {
    let count = 0;
    return () => ++count;
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


const newCounter = counter();
console.log(newCounter());
console.log(newCounter());


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
console.log('\n==== Challenge 3: Create a counter function with an object that can increment and decrement ====\n')
const counterFactory = () => {
  let counter = 0;
  let increment = () => {
              return ++counter;
          };
  let decrement = () => --counter;
  return {
      increment,
      decrement
    };
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

const magicCounter = counterFactory();
console.log(magicCounter.increment());
console.log(magicCounter.increment());
console.log(magicCounter.decrement());


