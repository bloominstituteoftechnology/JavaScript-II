// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

const itemsWdup = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'Pencil', 'yo-yo', 'Dance'];



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

getLength(items, function(length){
  console.log(length);
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}

last(items, function(last) {
  console.log(last);
});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}

sumNums(3, 19, function(sum){
  console.log(sum);
});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

multiplyNums(3, 5, function(multi){
  console.log(multi);
});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.

  let bCheck = false;
    if (list.includes(item)) {
      return cb (!bCheck);
    }
    else {
      return cb(bCheck);
    }
}

contains('Pencil', items, function(avail){
  console.log(avail);
});
 
/* STRETCH PROBLEM */
let dupFree = [];
function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  array.forEach(function(itemsDup){
    if (itemsDup.includes(array)) {
      dupFree.push(`${array}`);
    }
    return cb(dupFree);
  });
}

removeDuplicates(itemsWdup, function(noDup){
  console.log(dupFree);
});
