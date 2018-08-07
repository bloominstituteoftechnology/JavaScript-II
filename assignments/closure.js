// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function SwingSword(name, weapon) {
  let character = name;
  console.log("Your character is named " + name);

  function attachWeapon() {
    let weapons = weapon;
    console.log(name + " has equiped the " + weapons);

    function attack() {
      console.log(name + " has attacked the enemie with a " + weapon);
    }

    attack();
  }

  attachWeapon();
}

SwingSword("Kazuma", "Sword");

// ==== Challenge 2: Create a counter function ====
let countNum = 0;
const counter = function(element) {
  // Return a function that when invoked increments and returns a counter variable.

  function increment() {
    countNum++;
    console.log(countNum);
  }

  increment();
};

counter();
counter();
counter();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

  let obj = {
    "count": 0,
    "increment": function() {
      obj.count += 1;
      return obj.count;
    },
    "decrement": function() {
      obj.count -= 1;
      return obj.count;
    }
  };
  
  console.log("obj increments to " + obj.count);
  obj.increment();
  console.log("obj increments to " + obj.count);
  obj.increment();
  console.log("obj increments to " + obj.count);
  obj.decrement();
  console.log("obj decrements to " + obj.count);
  

};

counterFactory();

// I think this is what the question was asking? If not, we can talk on our 1 on 1's about it.
