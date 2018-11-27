// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function animalType(animal) {
  const animalName = animal;
  console.log(`${animalName} are a very cool species!`);

  function endangeredAnimal() {
    const endangeredAnimal = "Sea otters";
    console.log(`${endangeredAnimal} are an endangered species. Help them to thrive just like ${animalName}.`)

    function preserveHabitats() {
      const habitatHelp = "use less plastic!"
      console.log(`How can we help species like ${endangeredAnimal}? For starters, ${habitatHelp} We should take care of all animals, whether ${endangeredAnimal} or ${animalName}.`)
    }

    preserveHabitats();
  }
  endangeredAnimal();
}
animalType("sharks");


// ==== Challenge 2: Create a counter function ====
  // Return a function that when invoked increments and returns a counter variable.
const counter = () => {
  let count = 0;
  return function(){
    count++;
    return count;
  }
};
const increment = counter();
console.log(increment());
console.log(increment());

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
