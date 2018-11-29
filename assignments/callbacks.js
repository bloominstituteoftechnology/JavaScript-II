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
  cb(arr.length);
}
getLength(items, function(length) {
  console.log(length);
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[arr.length - 1]);
}
last(items, function(last) {
  console.log(last);
});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x + y);
}
sumNums(123, 456, function(sum) {
  console.log(sum);
})

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x * y);
}
multiplyNums(11, 12, function(product) {
  console.log(product);
})

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  cb(list.some(function(list_element) {
    return list_element === item;
  }));
}
contains("yo-yo", items, function(isContained) {
  console.log(`Item is${isContained ? " in " : " not in "}the list.`);
})
contains("yo", items, function(isContained) {
  console.log(`Item is${isContained ? " in " : " not in "}the list.`);
})

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  cb(array.filter(function(item, i, arr) {
    return i === arr.indexOf(item);
  }))
}
const testArr = [1, 2, 2, 3, 4, 5, 5, 5, 6, 7, 7, 7, 0];
removeDuplicates(testArr, function(cloneFilteredArr) {
  console.log(cloneFilteredArr);
});