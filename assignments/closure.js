// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function greeting() {
    let hello = "Nice to meet you";

    function fullGreeting(first, last) {
        return `${hello} ${first} ${last}!`;
    }
    return fullGreeting;
}

const sayHello = greeting();
console.log(sayHello("Jess", "H"));

// ==== Challenge 2: Create a counter function ====
const counter = () => {
    // Return a function that when invoked increments and returns a counter variable.
    let count = 0;
    const plusOne = function() {
        return ++count;
    }
    return plusOne;
};
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
    let count = 0;
    return {
        increment: () => { return ++count; },
        decrement: () => { return --count; }
    }

};

const countIncAndDec = counterFactory();
console.log(countIncAndDec.increment());
console.log(countIncAndDec.increment());
console.log(countIncAndDec.increment());
console.log(countIncAndDec.decrement());
console.log(countIncAndDec.increment());
console.log(countIncAndDec.increment());
console.log(countIncAndDec.decrement());