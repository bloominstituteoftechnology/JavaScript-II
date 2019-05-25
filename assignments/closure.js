// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function beNice(phrase) {
  const phraseHolder = phrase;
  console.log(`I hope you have a ${phraseHolder} day`);
  function beMean() {
    const meanPhrase = "I don\'t hope"
    console.log(`${meanPhrase} you have a ${phraseHolder} day`)
  }
  beMean();
}

beNice("great");





/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
// let counter = (function(){
//   let count = 0;
//   return function () {
//     count +=1;
//     return count
//   }
// })();
// counter();
// counter()
// console.log(counter());

const counter = () => {
  let count = 0;
  return function() {
    count += 1;
    return count;
  }
};

const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
