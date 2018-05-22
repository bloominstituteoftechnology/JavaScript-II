// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const bubble = (() => {
  let type = 'soap';
  return {
    getType() {
      return type;
    },
    setType(newType){
      type = newType;
    }
  };
})();

console.log(bubble.getType());
bubble.setType('chewing gum');
console.log(bubble.getType());

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return () => ++count;
};
const newCounter = counter();
console.log('New Counter: ');
console.log(newCounter()); // 1
console.log(newCounter()); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;

  return {
    increment() {
      return ++count;
    },
    decrement() {
      return --count;
    }
  };

};

const newCounterFactory = counterFactory();
console.log('New Counter Factory - increment: ');
console.log(newCounterFactory.increment());
console.log('New Counter Factory - decrement: ');
console.log(newCounterFactory.decrement());
console.log('New Counter Factory - decrement: ');
console.log(newCounterFactory.decrement());
