// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
console.log(`********* closure.js challenges *********`)

const  whoIsThatPokemon = () => {
  let pokemon = "Pikachu"
      console.log(pokemon)
        // debugger;
        const espeon = (pokemon) => {
          pokemon = "Espeon";
           console.log(pokemon);
           // debugger;
        }
          espeon()
}

// function whoIsThatPokemon2 () {
//   let pokemon = "Pikachu"
//       console.log(pokemon)
   
//       espeon()
//         function espeon () {
//           pokemon = "Espeon";
//            console.log(pokemon);
    
//         }
// }

whoIsThatPokemon()
// whoIsThatPokemon2()

// console.log(whoIsThatPokemon);
// console.log(whoIsThatPokemon2());


// ==== Challenge 2: Create a counter function ====
const counter = () => {
   let count = 0;
   console.log("default value of counter", count)
   // debugger
      // Return a function that when invoked increments and returns a counter variable.
  return () => {
        count ++;
            // debugger
          console.log("closure function operated counter:", count)
        return count;
  }
};

const newCounter = counter();
// Example usage: const newCounter = counter();
newCounter(); // 1
newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
