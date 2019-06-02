// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function gnome(){
  const headDress = 'hat';
  console.log(`I have a red ${headDress}`);

  function mamaGnome(){
    console.log(`I have a green ${headDress}`);

    function babyGnome(){
      console.log(`I have a blue ${headDress}`);
    }

    babyGnome();
  }

  mamaGnome();
  
}
gnome();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  return () => (count++);
  // Return a function that when invoked increments and returns a counter variable.
}; 
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
newCounter(); // 1
newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
