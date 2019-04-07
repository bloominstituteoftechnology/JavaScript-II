// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


// Challenge 1

function getLength(arr, cb) {
  return cb(arr.length);
}

function length(totalItmes){
  console.log(totalItems);
}

getLength(items, length);

// Challenge 2

function last(arr, cb){
  return cb(arr.slice(-1)[0]);
}

function lastItem(lastItm){
  console.log(lastItm);
}

last(items, lastItem);

// Challenge 3

function sumNums(x, y, cb){
  return cb( x , y);
}

function getSum(x, y){
  console.log(x + y);
}

sumNums(10, 10, getSum);

// Challenge 4

function multiplyNums(x, y, cb){
  return cb( x , y);
}

function multiply(x, y){
  console.log(x * y);
}

multiplyNums(10, 10, multiply);

// Challenge 5

let colors = ["blue", "red" , "yellow"];

function contains(item, list, cb){
  for(let i = 0; i<list.length; i++){
    if(list[i] === item){
      return cb(true);
    }else{
      return cb(false);
    }
  }
};

function DoesItHave(item){
  console.log(item);
}

contains("teal", colors, DoesItHave);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
