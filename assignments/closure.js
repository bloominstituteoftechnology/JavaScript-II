// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!


function giveFullName() {
  let fullName = "";

  const combineTitleFirstLast = function(title, firstName, lastName) {
    fullName = `${title} ${firstName} ${lastName}`;
    return fullName;
    }   
  return combineTitleFirstLast;
  }

  const customer1 = giveFullName();
  console.log(customer1);

  let firstName = 'Max';
  console.log(customer1("Mr.", "John", "Smith"))


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let x = 0;
  const increment = function() {
    x = x + 1;
    return x;
  }
  return increment;
};

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

const newCounter = counter();
console.log(newCounter);

console.log(newCounter());
console.log(newCounter());
console.log(newCounter());



// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let a = 0;
  let newObject = {
    increment: function() {
      a = a + 1;
      return a;
    },
    decrement: function() {
      a = a - 1; 
      return a;
    },
  }; 
  return newObject;
}

const adderSubtractor = counterFactory()
console.log(adderSubtractor);

console.log(adderSubtractor.increment());
console.log(adderSubtractor.increment());
console.log(adderSubtractor.increment());
console.log(adderSubtractor.decrement());
console.log(adderSubtractor.decrement());
console.log(adderSubtractor.decrement());
console.log(adderSubtractor.decrement());

  
 




