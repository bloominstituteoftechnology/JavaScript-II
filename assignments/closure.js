// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function foo() {
    let a = 1
        // cant return a + b from here
    function innerFoo() {
        let b = 5
        return a + b
    }
    return innerFoo
}

function outer(a) {
    return a
}

// ==== Challenge 2: Create a counter function ====
let adds = () => {
    let counter = 0;
    return function() {
        counter += 1
        return counter
    }
}

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {


    // Return an object that has two methods called `increment` and `decrement`.
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.
};