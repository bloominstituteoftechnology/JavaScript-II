// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.


//NESTED
function genre(genreName, genreName2) { 
  const origin1 = 'Japan';
  const origin2 = 'Russia';
  console.log(`These are my favorite genres: ${genreName} and ${genreName2}.`);
  //debugger;

  function author(authorName, authorName2) {
    const lifeStatus = 'dead';
    const lifeStatus2 = 'alive';
    console.log(`${authorName} is ${lifeStatus2}; ${authorName2} is ${lifeStatus}.`);
    //debugger;

    function book(title, title2) {
      const length = 'light reading';
      const length2 = 'heavy read';
      console.log(`${title} is a ${length2}; ${title2} is some ${length}.`);
      //debugger;
    } //closes book
    book('Wind-Up Bird Chronicle', 'Notes from Underground');
  } //closes author
  author('Haruki Murakami', 'Fyodor Dostoevsky');
} //closes genre
genre('Surrealism', 'Russian Classics');


//Closure
const sub = (function() {
  var counter = 0;
  return function () {
    counter += 1;
    return counter;
  }
}) ();

sub();
sub();
sub();

function letsMultiply(x){
  return function(y){
    return x * y;
  };
}

const mult666 = letsMultiply(666);
const mult13 = letsMultiply(13);

console.log(mult666(13));
console.log(mult13(666));


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.

  let count = 0;

  function counter() {
    return (count +=1);
  }
  counter();
  console.log(count);
  counter();
  console.log(count);
  counter();
  console.log(count);
};

console.log(counterMaker());

// Example usage: const myCounter = counterMaker();
// myCounter(); // 1
// myCounter(); // 2


// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.



// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;

  function increment(){
    return (count += 1);
  }
  function decrement(){
    return (count -= 1);
  }

  increment();
  increment();
  increment();
  decrement();
  console.log(count);
};

console.log(counterFactory());