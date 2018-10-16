// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function favSport(sportName) {
    const sport = sportName;
    console.log(`My favorite sport is ${sport}!`);

    function favPlayer() {
        const player = 'Kyrie Irving';
        console.log(`${sport}, is my favorite sport, and ${player} is my favorite ${sport} player.`);
    }
    favPlayer();
}
favSport('Basketball');


// ==== Challenge 2: Create a counter function ====
const counter = () => {
    let count = 0;

    return () => (++count);
    // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: 
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2
console.log(newCounter()); // 3
console.log(newCounter()); // 4
console.log(newCounter()); // 5


/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
    // Return an object that has two methods called `increment` and `decrement`.
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.
};