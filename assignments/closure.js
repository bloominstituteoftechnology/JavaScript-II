// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function writeClosures(numOfClos) {
  let iter = 0,
    closureArr = [];
  if (numOfClos === 0) return;
  while (numOfClos > 0) {
    let newClosure = () => {
      iter++;
      console.log(`I'm a closure number ${iter}!`);
    }
    newClosure();
    closureArr.push(newClosure);
    numOfClos--;
  }
  return closureArr;
}

let closures = writeClosures(5);
console.log(closures);



// ==== Challenge 2: Create a counter function ====
const Counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return () => {
    // console.log(count);

    return count++;
  }
}

let iter = 0;
const c1 = Counter();
// console.log(c1);

while (iter < 5) {
  // c1();
  iter++;
}
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};