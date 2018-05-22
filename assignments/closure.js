// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function HomeOwner(address, rent) {
  let mortgage = 250000;
  console.log(`My house is located at ${address} and costs me ${rent} dollars a month.`);
  //? closure: mortgage, address, rent

  function theBank(monthsLoaned) {
    let housesLoanedOut = '513';
    let homeOwnerOwesUs = mortgage - (monthsLoaned * rent);
    //? closure: mortgage, address, rent, monthsLoaned, HousesLoanedOut, homeOwnerOwesUs
  }
}



// ==== Challenge 2: Create a counter function ====
let n = 0;
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  n++;
  return n;
};

counter(); //?
counter(); //?

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
let m = 0
const counterFactory = () => {
  const increment = () => {
    m++;
    return m;
  };
  function decrement() {
    m--;
    return m;
  }
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};