// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function anActivity(activityParameter) {
  let activity = activityParameter;
  console.log(`Hey, lets go to the ${activity}`);

  function boringActivity() {
    let boring = "Calculus HW";
    console.log(
      `Hey, let's not go to the ${activity} and do our ${boring} instead.`
    );
    function funActivity() {
      let fun = "Ice Cream";
      console.log(
        `${boring} is lame, and I'm too lazy for the ${activity}, let's instead go out for ${fun}`
      );
    }
    funActivity();
  }
  boringActivity();
}
anActivity("gym");
// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
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
