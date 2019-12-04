// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

function add(num1) {
    return function (num2) {
        return num1 + num2;
    }
};
let add5 = adder(5);
let add7 = adder(7);
console.log(add7);

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
    const counter = () =>
    {
        let count = 0;
        return function ()
        {
            let count = 0;
            return function ()
            {
                return ++count;
            }
        };
        console.log(newCounter);
        console.log(newCounter);
        console.log(newCounter);

        // IMPLEMENTATION OF counterMaker:
        // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
        // 2- Declare a function `counter`. It should increment and return `count`.
        //      NOTE: This `counter` function, being nested inside `counterMaker`,
        //      "closes over" the `count` variable. It can "see" it in the parent scope!
        // 3- Return the `counter` funnction.

        // Example usage: const myCounter = counterMaker();
        // myCounter(); // 1
        // myCounter(); // 2

        // ==== Challenge 3: Make `counterMaker` more sophisticated ====
        // It should have a `limit` parameter. Any counters we make with `counterMaker`
        const counterMaker = counter();
        //  newCounter();   //1
        // newCounter(); //2
        console.log(newCounter());
        console.log(newCounter());

        // will refuse to go over the limit, and start back at 1.

        // // ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
        // const counterFactory = () =>
        // {
        //     // Return an object that has two methods called `increment` and `decrement`.
        //     // `increment` should increment a counter variable in closure scope and return it.
        //     // `decrement` should decrement the counter variable and return it.c
        //     let count = 0; {


        //         return {
        //             increment: function ()
        //             {
        //                 return ++count;

        //             },
        //             decrement: function ()
        //             {
        //                 return --count;
        //             },
        //         }
        //     }
        //     console.log(counterFactory.increment());
        //     console.log(counterFactory.decrement);
        // }

