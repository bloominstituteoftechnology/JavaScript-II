// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const sentence = (name) => {
  const first = 'My';
  function fun() {
    const second = 'name';
    function funfun() {
      const third = 'is';
      function funfunfun() {
        console.log(`${first} ${second} ${third} ${name}`)
      };
      funfunfun();
    };
    funfun();
  };
  fun();
}
sentence('Chris');


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  const newCounter = () => {
    count ++;
    console.log(count);
  }
  newCounter();
  newCounter();
};

counter();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let num = 0;
  
  let obj = {
    increment: () => num += 1,
    decrement: () => num -= 1,
  }
  console.log('num', num);
  obj.increment();
  console.log('num', num);
  obj.increment();
  console.log('num', num);
  obj.increment();
  console.log('num', num);
  obj.decrement();
  console.log('num', num);
  obj.decrement();
  console.log('num', num);
  obj.decrement();
  console.log('num', num);
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

counterFactory();


