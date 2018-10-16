// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const totallySimple = (occupation, mood) => {
  const simpleton = {
    name: null, // never given one
    age: null, // lost track
    occupation,
    mood
  };

  return () => simpleton.name 
    ? simpleton.name : simpleton.age 
    ? simpleton.age : simpleton.mood;
};
const farmer = totallySimple('farmer', 'humble');
console.log(farmer());

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  return () => ++count;
};
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count
  }
};
const anotherCounter = counterFactory();
console.log(anotherCounter.increment()); // 1
console.log(anotherCounter.increment()); // 2
console.log(anotherCounter.decrement()); // 1
