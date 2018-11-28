// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'Sharpie', 'Gum', 'yo-yo', 'Notebook', 'Pencil'];

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

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length -1]);
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(list.includes(item));
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let newArr = array;
  let finalArr = [...new Set(newArr)]
  return cb(finalArr)

  // set method stores unique values of any type.. a value in set may only occur once.
  // spread operator to be put at the end of a newly formed array and assigned to final Arr.
}
// test suite
console.log(getLength(items,(a)=>a));
console.log(last(items,(a)=>a));
console.log(sumNums(5, 5,(a)=>a));
console.log(multiplyNums(5, 5,(a)=>a));
console.log(contains(items,'Nheell',(a)=>a));
console.log(removeDuplicates(items,(a)=>a));