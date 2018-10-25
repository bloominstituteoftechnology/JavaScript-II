// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function postThis() {
    const message = "Social media has responded";
    console.log("This message is for social media.");
//    debugger
    function replyTo() {
        console.log(`Hello my children, ${message}.`); 
//        debugger
    }
    
    replyTo();
}

postThis();




// ==== Challenge 2: Create a counter function ====
const counter = () => {
    for (let i = 0; i < counter.length; i++) {
        return counter;
    }
  // Return a function that when invoked increments and returns a counter variable.
    function newCounter(x) {
       return function (y) {
           return x + y;
       }
       
    }
    
    const add10 = newCounter(10);
    const add20 = newCounter(20);

        
    console.log( add10(4));
    console.log( add20(4));
    
};

counter()


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
