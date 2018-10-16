// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

 

  //Given this problem: 
  
  function firstItem(arr, callback) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, callback) {
    return callback(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });


function getLength(arr, callback) {
  return callback(arr.length);
  // getLength passes the length of the array into the callback.
}
getLength(items, function(length) {
  console.log(length)
});

function lastItem(arr, callback) {
  return callback(arr[3]);
  // last passes the last item of the array into the callback.
}

lastItem(items, function(last) {
  console.log(last)
});


function sumNums(x, y, callback) {
  return callback(x, y);
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}
const add = function(x, y) {
  console.log(x + y)
}

sumNums(5, 2, add)

function multiplyNums(x, y, callback) {
  return callback(x, y);
  // multiplyNums multiplies two numbers and passes the result to the callback.
}

const times = function(x, y) {
  console.log(x * y)
}
multiplyNums(3, 5, times)

function contains(item, list, callback) {
  return callback(item, list);
  
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}
const inBackPack = function(item, list) {
  for (let i = 0; i < items.length; i++) {
    if (list[i] === item) {
      console.log(true);
    } else if (list[i] !== item) {
      console.log(false);
    
    }
  }
}
contains('Pencil', items, inBackPack )


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
