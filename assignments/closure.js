// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function animalNoise(sound) {
	let soundMade = sound;
  	function animal(soundMade) {
      if(soundMade == 'quack') {
        return 'duck'
      } else {
        return 'who knows what kind of animal that is!'
      }
    }
    return animal;
  };
  
let animalType = animalNoise();

console.log(animalType('quack'));
console.log(animalType('meow'));

// ==== Challenge 2: Create a counter function ====
// Return a function that when invoked increments and returns a counter variable.
function counter() {
  let count = 0;
  	function counting() {
  count = count + 1;
  return count;
  }
  return counting;
};

let getCount = counter();

console.log(getCount());
console.log(getCount());

  
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
