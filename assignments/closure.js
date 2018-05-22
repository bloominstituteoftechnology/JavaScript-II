// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let child = 'Everywhere'
const lookingInTheHouse = () =>{
  console.log(`I am in the house and my child seems to be ${child}`)
    const lookingInTheGarage = ()=> {
      console.log(`Now I'm looking in the garage and my child is ${child}`)
    }
  return lookingInTheGarage();
}

lookingInTheHouse();
// ==== Challenge 2: Create a counter function ====
let count = 0;
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  count++;
  console.log(count);
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter;
newCounter();
newCounter();
newCounter();

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
    let countStuff = 0;
    countingObject = {
    increment: function () {
      countStuff++
      return countStuff;
    },
    decrement: function() {
      countStuff--;
      return countStuff;
    } 
  }
  return countingObject;
};

const countBot = counterFactory();
console.log('Initializing Count Bot:')
console.log('Incrementing...')
console.log(countBot.increment())
console.log(countBot.increment())
console.log(countBot.increment())
console.log(countBot.increment())
console.log('Decrementing...')
console.log(countBot.decrement())
console.log(countBot.decrement())
console.log(countBot.decrement())
console.log(countBot.decrement())