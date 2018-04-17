let wassupBro = () => {
  let bro = {
    firstName : 'Brosaurus',
    lastName : 'Rex'
};

  let wassup = () => {
    return `Wassup ${bro.firstName} ${bro.lastName}`;
  }
  return wassup();
};

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let number = 0;
  return () => {
    number++;
    return number;
  }


  // Return a function that when invoked increments and returns a counter variable.
};
const increment = counter();

console.log(increment())
console.log(increment())
console.log(increment())

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    }
  }
};
