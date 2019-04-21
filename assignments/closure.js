// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!


Donald();

function Donald(){
  const president="Donald Trump";
  console.log(`Our current president is: ${president}!`);

  Mike();
  function Mike(){
    const vp="Mike Pence";
    console.log(`${president} is very concerned about China.`);
    Sally();
    function Sally(){
      const wife="Sally Pence";
      const wifeDinnerPreference="Chinese";
      console.log(`We ate our Easter dinner at ${president}'s house, my husband is ${vp}!`)
    }
    // const dinnerPreference="Hamburger";
    // function doesMikeknowWhatSallyWantsForDinner (wifeDinnerPreference, dinnerPreference) {
    //   if (wifeDinnerPreference == dinnerPreference) {
    //     console.log("Harmony in the home.")
    //   }
    //   else {console.log("What's for dinner remains unanswered.")};
    // }
    // doesMikeknowWhatSallyWantsForDinner(wifeDinnerPreference, dinnerPreference);

    //  The code above is an example of how Mike doesn't have access to the thoughts in his wife's head, which is a metaphor for a closure.  running that code block results in an error, because the closure of the function causes wifeDinnerPreference to return as an undefined variable.
  }
}

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
