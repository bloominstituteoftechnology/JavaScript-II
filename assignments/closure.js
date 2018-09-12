// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function beyondFilm(director){
  const name = director
  console.log(`"and... Action!" Yelled ${name}`);
  
    function frontFilm(doctor){
      const actor = doctor;
      console.log(`"Don't Worry! As long as you hit the wire with the connecting hook at precisely 88 miles per hour, the instant the lightning strikes the tower!"
       ...${actor} pauses as if he just realized what he said has a microscopic chance of working, and shrugs; "everything'll be fine..."  ${actor} in reassurance`);
      
    }//frontfilm
  frontFilm("Doc");
}//beyondFilm
beyondFilm("Robert");

// closure: robert

// ==== Challenge 2: Create a counter function ====
const counter = (x) => {
  let count = 0;
  // Return a function that when invoked increments and returns a counter variable.
  return () => (++count);
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
}
//oh yeah