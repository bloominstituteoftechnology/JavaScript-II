// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function yell(name){
  const n = name;
  console.log(`Can you hear Me ${n}!!!!!!`);

  function speak(nickName){
    const nn = "pebbles";
    console.log(` Hey, ${ nn } is your given name ${ n } , i'd never heard it before.`);

    function whisper() {
      const lower = "I'm sorry for speaking so loud." ;
      console.log (`{lower} Hey,Would you rather me call you  ${ nn } or ${ n }, i knowsome people havea preference.`)
    }
    whisper();
  }
  speak();
}
yell();




/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  return () => (++count);
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
console.log(newCounter())
console.log(newCounter())
console.log(newCounter())
console.log(newCounter())
console.log(newCounter())
console.log(newCounter())




// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
