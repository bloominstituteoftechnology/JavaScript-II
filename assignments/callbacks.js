// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'Pencil', 'Notebook'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  return cb(arr.length);
}

getLength(items, function(x){
  console.log(x);
});

function last(arr, cb) {
  return cb(arr[arr.length - 1]);
}

last(items, function(x){
  console.log(x);
});

function sumNums(x, y, cb) {
  return cb(x + y);
}

sumNums(1, 2, function(x){
  console.log(x);
});

function multiplyNums(x, y, cb) {
  return cb(x * y);
}

multiplyNums(2, 3, function(x){
  console.log(x);
});
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for(let i = 0 ; i < list.length; i++){
    if(item === list[i]){
      return cb(true);
    }
  }
  return cb(false);
}

contains('Pencil', items, function(x){
  console.log(x);
});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let arr = [];
 
  for(let i = 0; i < array.length; i++){
    if(arr.indexOf(array[i]) === -1){
      arr.push(array[i]);
    }
  }
  return cb(arr);
}

removeDuplicates(items, function(x){
  console.log(x);
});