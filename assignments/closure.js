// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function movies(title) {
  const movieName = title;
  console.log(`My favorite movie is ${movieName}`)
  
  function actor() {
    const favActor = "Denzel Washington";
    console.log(`My favorite actor is ${favActor} and my favorite movie is ${movieName}`);

    function director() {
      const favDir = "Frank Capra";
      console.log(`${favDir} is my favorite movie director, ${favActor} is my favorite movie actor, and ${movieName} is my favorite movie. `)
    }
    director();
  }
  actor();
}

movies("Braveheart");

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  return () => (++count)
  
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
  return () => (++count)
  return () => (--count)
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());