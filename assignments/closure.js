// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function bestWaifu() {
    let waifu = "Zero Two";

    function changeWaifu() {
        if (waifu === "Zero Two") {
            waifu = "Megumin";
        }
        else {
            console.log(`The current waifu is ${waifu}`);
        }
    }
}

// ==== Challenge 2: Create a counter function ====

let count = 0;
const counter = () => {
    // Return a function that when invoked increments and returns a counter variable.
    count += 1;
    console.log(count)
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
counter();
/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function 
// with an object that can increment and decrement ====

const counterFactory = () => {
    let counter = 0;
    let myFunctions = {
        increment: function() {
            console.log(counter+=1)
        },
        
        decrement: function() {
            console.log(counter-= 1)
        }
    };
    
    return myFunctions;
};
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.
let newFactory = counterFactory();
console.log(newFactory.increment());
console.log(newFactory.increment());
console.log(newFactory.increment());
console.log(newFactory.decrement());