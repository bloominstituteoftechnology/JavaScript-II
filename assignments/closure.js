// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
// Sorry if its not simple!
function Postmates(name){
  let welcome = 'Welcome to Postmates!';
  console.log(`${welcome}`);

  function theUsual(){
    let usual = 'Bistek a la Mexicana';
    let usualPlace = 'La Campana';
    console.log(`${name}, Would you like your usual ${usual} from ${usualPlace}?`);

    function Lucky(){
      let discount = 'FREE'
      console.log(`Guess what?! today is your lucky day! Your order is from ${usualPlace} is ${discount}!!`)
    }
    Lucky();
  }
  theUsual();
}
Postmates('Mysti');

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
