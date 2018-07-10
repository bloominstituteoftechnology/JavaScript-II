// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

let myName = "Josh";

function sayHello() {
  let example = "jim";
  // accessing myName outside this function
  return `Hello ${myName}`;
}
console.log(sayHello());

console.log(example);


// let character = 'Ironman';

// function characterSpeak() {
//   return `I am ${character}!`;
// }

// console.log(characterSpeak());

// function anotherCharacterSpeak(characterName) {
//   return 'I am ' + characterName + '!';
// }

// console.log(anotherCharacterSpeak('the Hulk'));



// ==== Challenge 2: Create a counter function ====
// let firstNumber = 0;

const counter = () => {
 
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return () => (++count);
};


// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// let secondNumber = 0;

const counterFactory = () => {
  let count = 0;
  return {
    increment: () => (++count),
    decrement: () => (--count),
  };
};
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
 

  const newCounterFactory = counterFactory();
  console.log(newCounterFactory.increment());
  console.log(newCounterFactory.decrement());
  console.log(newCounterFactory.decrement());



  // if (counterFactory(increment)) {
  //   return secondNumber += 1;
  // }
  // if (counterFactory(decrement)) {
  //   return secondNumber -+ 1;
  // }


  // const counterFactory = () => {
  //   let count = 0;
  //   return {
  //     increment: () => (++count),
  //     decrement: () => (--count),
  //   };
  // };

  // return {
  //   increment: function () {
  //     return secondNumber += 1;
  //   },
  //   decrement: function () {
  //     return secondNumber -= 1;
  //   },
  // }

