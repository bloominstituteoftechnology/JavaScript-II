// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let myChickens = 5;


const chickens = () => {
let totalEggs = 0;
  return {
    perDay : () => {
      totalEggs = totalEggs + 12;
      return totalEggs;
    }

  }

};

let egg = chickens();
// console.log(egg.perDay()
console.log(`\nEach hen lays ${egg.perDay()} per day. \nI have ${myChickens} chickens, so I collect ${egg.perDay() * myChickens} eggs per day!\n`);



// ==== Challenge 2: Create a counter function ====
// Return a function that when invoked increments and returns a counter variable.
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

const cows = () => {
  let count = 80;
      return {
        add : () => {
        count++;
        return count;
      }
    }
};
let cow = cows();

console.log(`${cow.add()} total cows is ${cow.add() * 800} burgers! Yum!`);

const pigs = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  let count = 9000;

  return {
      plus : () => {
        count++;
      return count; },
    }
};
let pig = pigs()
console.log(`pigs! ${pig.plus()}`)


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

const cats = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  let count = 0;

  return {
      plus : () => {
        count++;
      return count; },

      minus : () => {
         count--
      return count;
      }
    }
};

const dogs = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  let count = 0;

  return {
      plus : () => {
        count++;
      return count; },

      minus : () => {
         count--
      return count;
      }
    }
};

let dog = dogs();
let cat = cats();


  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
console.log(dog.plus())
console.log(dog.plus())
console.log(dog.plus())
console.log(cat.plus())
console.log(cat.plus())
console.log(cat.plus())
console.log(dog.plus())
console.log(`Total cats ${cat.minus()}`)


// x.plus;
// console.log(x.minus())
