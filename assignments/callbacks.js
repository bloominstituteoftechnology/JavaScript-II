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
getLength(items, function (result){
  console.log(result);
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  let lastIndex = arr.length-1;
  let lastItem = arr[lastIndex];
  cb(lastItem);
}
last(items, function (result){
  console.log(result);
});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x+y);
}
sumNums(1,2, function (result){
  console.log(result);
});


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x*y);
}
multiplyNums(2, 3, function (result){
  console.log(result);
});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  cb(list.includes(item));
}
contains("Gum", items, function (result){
  console.log(result);
});
contains("---", items, function (result){
  console.log(result);
});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let uniques = [];
  array.forEach(function (element){
    if(!uniques.includes(element)){
      uniques.push(element);
    }
  });
  cb(uniques);
}
removeDuplicates([1,1,1,1,2,3,4,5,6,6,6,7,8,4,5,9], function (result){
  console.log(result);
});
