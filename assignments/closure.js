// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const list = () => {
  let list = [];
  return {
    'addItem': item => list.push(item),
    'getItem': itemId => list[itemId],
    'getAllItems': () => list,
    'removeItem': itemId => list.splice(itemId, 1),
    'removeAllItems': () => list.length = 0
  }
};

const groceryList = list();

groceryList.addItem('Steak');
groceryList.addItem('Chicken');
groceryList.addItem('Pork');
groceryList.addItem('Milk');
groceryList.addItem('Cheese');

console.log(groceryList.getItem(0));
console.log(groceryList.getItem(3));
console.log(groceryList.getAllItems());

groceryList.removeItem(3);
console.log(groceryList.getAllItems());

groceryList.removeAllItems();
console.log(groceryList.getAllItems())


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return () => ++count;
};

const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2
console.log(newCounter());


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
    'increment': () => ++count,
    'decrement': () => --count
  }
};

const newCounterFactory = counterFactory();
console.log(newCounterFactory.increment());
console.log(newCounterFactory.increment());
console.log(newCounterFactory.decrement());
console.log(newCounterFactory.decrement());
console.log(newCounterFactory.decrement());