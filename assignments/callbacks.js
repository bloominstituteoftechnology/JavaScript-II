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


function getLength(arr, cb) {
  return cb(arr.length);
  // getLength passes the length of the array into the callback.
}
getLength(items, output => console.log(output));

function last(arr, cb) {
  return cb(arr[arr.length-1]);
  // last passes the last item of the array into the callback.
}
last(items, output => console.log(output));

function sumNums(x, y, cb) {
  return cb(x + y);
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}
sumNums(2, 5, output => console.log(output));

function multiplyNums(x, y, cb) {
  return cb(x * y);
  // multiplyNums multiplies two numbers and passes the result to the callback.
}
multiplyNums(2, 5, output => console.log(output));

function contains(item, list, cb) {
  return cb(list.includes(item));
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}
contains('Notebook', items, output => console.log(output));

/* STRETCH PROBLEM */

testArray = ['bob', 'bob', 'alice', 'chris', 'alice', 'dave']

// removeDuplicates removes all duplicate values from the given array.
// Pass the duplicate free array to the callback function.
// Do not mutate the original array.

function removeDuplicates(array, cb) {
  newArray = [];
  array.forEach((element, index, arr) => {
      if (index === arr.lastIndexOf(element)){newArray.push(element)}
    })
    return cb(newArray);
  }
removeDuplicates(testArray, output => console.log(output));