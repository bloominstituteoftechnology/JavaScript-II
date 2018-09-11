// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function graphicsCard(manufacturerName) {
    const name = manufacturerName;
    const cardName = "GTX 1080ti";
    console.log(name, cardName);

    function cardSerialNumber(){
        const serialNum = "1234567891011121";
        console.log(`${name}, ${cardName}, ${serialNum}`);

        function cardMemorySize(){
            const memorySize = 16;
            console.log(`${name}, ${cardName}, ${serialNum}, ${memorySize}`);
        }
        cardMemorySize();
    }
    cardSerialNumber();

};

// ==== Challenge 2: Create a counter function ====

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
    let count = 0;
    return count+1;
};
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

graphicsCard('Asus');

console.log(counter());
console.log(counter());
console.log(counter());