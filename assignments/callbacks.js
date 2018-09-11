// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

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
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
const repeatLength = param => console.log(param);
getLength(items, repeatLength);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  const lastIndex = arr.length-1;
  return cb(arr[lastIndex]);
}
const repeatLast = param => console.log(param);
last(items,repeatLast);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y);
}

const repeatSum = (x,y) => console.log(x + y);
sumNums(5, 10, repeatSum);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y);
}

const repeatProduct = (x,y) => console.log(x * y);
multiplyNums(5, 10, repeatProduct);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(item, list);
}

const containCheck = (item, list) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i] == item) {
      console.log(true);
      return;
    }
  }
  console.log(false);
}
contains("Gum", items, containCheck);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
