// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const cult = () => {
  let cultName = 'Cult of Functionality';
  console.log(`We are the ${cultName}!`);

  const cultLeaders = () => {
    let leaders = ['Dan', 'Josh'];
    console.log(`We are the ${cultName} and our leaders are ${leaders[0]} and ${leaders[1]}!`);

    const cultStudent = () => {
      let student = 'Micah';
      console.log(`I am ${student} and I am a part of the ${cultName}! My leaders are ${leaders[0]} and ${leaders[1]}!`);
    }

    cultStudent();
  }

  cultLeaders();
};

cult();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
function counter() {
  let count = 0;
   function add() { 
    count = count + 1; 
    return count;
  }
  return add;
};

const newCounter = counter();

// console.log(newCounter());
// console.log(newCounter());
// console.log(newCounter());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

  let count = 0;

  const counterObject = {
    increment: () => {
      return ++count;
    },

    decrement: () => {
      return --count;
    }
  }
  return counterObject;
};

const newCount = counterFactory();

console.log(newCount.increment());
console.log(newCount.increment());
console.log(newCount.increment());
console.log(newCount.increment());
console.log(newCount.decrement());
console.log(newCount.decrement());
