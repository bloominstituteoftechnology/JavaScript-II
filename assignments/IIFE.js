// This IIFE is kind of like an anonymous anonymous function, since
// neither the inner function nor the outer function ever need
// to be named!

const myCounter = (() => {
  let count = 0;
  return ( () => ++count );
}) ();


console.log("\nIIFE counter example");
console.log("We can't see 'count' from outside the function scope:")
console.log("typeof count =", typeof count);
console.log("but we can call the function to increment count:")
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());

