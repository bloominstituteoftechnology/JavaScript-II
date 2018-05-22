// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function addEmUp(a){

  return function(b){
     return a + b;
 };

}

let addHundred = addEmUp(100);


console.log(addHundred(50));
console.log(addHundred(200))



// ==== Challenge 2: Create a counter function ====
// const counter = () => { return

// };

//  // Return a function that when invoked increments and returns a counter variable.
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

function counter(a){

  return function(){
    //  return a += b;
    return a++;

};

}


let newCounter = counter(46);

console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// const counterFactory = () => {
// };
 // Return an object that has two methods called `increment` and `decrement`.
 // `increment` should increment a counter variable in closure scope and return it.
 // `decrement` should decrement the counter variable and return it.

 function countUpOrDown(a){

    // function theCounter
  
    return function() {
      let incOrDec = {
          increment = function(){
              return a++;
          },

          decrement = function(){
            return a--;

          }
    
    };

    }  
}

let inc = counter(2);

newCounter();
