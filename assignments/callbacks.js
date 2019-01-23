// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
const itemsTwo = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'Pencil'];

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

function arrayItems(arr, type) {
  if (type == "length"){
    return arr.length;
  }
  else if (type == "last") {
    return arr[arr.length - 1];
  }
}

function mathObj(x, y, type){
  if (type == "sum"){
    return x + y;
  }
  else if (type == "multiply") {
    return x * y;
  }
}

function checkItem(arr, item) {
  if (arr.filter(obj => obj === item)) {
    return true;
  }
  else {
    return false;
  }
}

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr, "length");
}

console.log (getLength(items, arrayItems));

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr, "last");
}

console.log (last(items, arrayItems));

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y, "sum");
}

console.log(sumNums(3,4,mathObj));

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y, "multiply");
}
console.log(multiplyNums(3,4,mathObj));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(list, item);
}

console.log(contains("Pencil", items, checkItem))

/* STRETCH PROBLEM */

function duplicateCheck(arr) {
  let test = arr.reduce((acc, currVal, index, array) => acc, currVal, index, array);
  return test;
}

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  cb(array);
}

// console.log(removeDuplicates(itemsTwo, duplicateCheck));
