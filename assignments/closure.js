// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let hundredWave = () => {
  let remaining = 100;
  return {
    killOne: function () {
      remaining -= 1;
    },
    killTen: function() {
      remaining -=10;
    },
    getValue: function () {
      return remaining;
    },
  };
}

const currentWave = hundredWave();
console.log(currentWave.getValue());//console logs 100
currentWave.killOne();//99
currentWave.killOne();//98
currentWave.killTen();//88
currentWave.killOne();//87
console.log(currentWave.getValue());//console logs 87



// ==== Challenge 2: Create a counter function ====
//I think this is what was originally wanted
// const counter = () => {
//   let count = 0;
//   return () => count +=1;
// }
//
// let counterA  = counter();
// console.log(counterA());//console log 1
// counterA();//1
// counterA();//2
// console.log(counterA());//console log 4

//what I initially made
const counter = () => {
  let count = 0;

  return {
    increment: function() {
      count +=1;
    },
    getValue: function() {
      return count;
    }
  }
};

let counterA = counter();
console.log(counterA.getValue()); //console logs 0
counterA.increment();//1
counterA.increment();//2
counterA.increment();//3
console.log(counterA.getValue());//3


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let counter = 0;

  return {
    increment: function() {
      counter += 1;
    },
    decrement: function() {
      counter -= 1;
    },
    getValue: function() {
      return counter;
    }
  }
};
const factoryA = counterFactory();
console.log(factoryA.getValue()); //console logs 0
factoryA.increment();//1
factoryA.increment();//2
factoryA.increment();//3
factoryA.decrement();//2
console.log(factoryA.getValue());//console logs 2
