// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const myFunc = () => {
    let name = 'Kevin Marker';
    const printName = () => {
        console.log(name);
    };
    return printName;
};

let myCall = myFunc();
myCall();


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
    let i = 0;
    function count () {
        return (i += 1);
    }
    return count;
};
// Example usage: const newCounter = counter();
const newCounter = counter();
console.log(newCounter()); //1
console.log(newCounter()); //2


/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
    let i = 0;

    function change(val) {
        i += val;
    }

    return {
        inc: () => change(1),
        dec: () => change(-1),
        val: () => i
    }
};
const counter1 = counterFactory();
console.log(counter1.val());
counter1.inc();
console.log(counter1.val());
counter1.inc();
console.log(counter1.val());
counter1.inc();
console.log(counter1.val());
counter1.inc();
console.log(counter1.val());
counter1.dec();
console.log(counter1.val());



