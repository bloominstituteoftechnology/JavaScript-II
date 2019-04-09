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
}

getLength(items, function (getLength) {
    console.log(getLength);
});


//End of first problem


function last(arr, cb) {
    return cb(arr[3]);
}

last(items, function (last) {
    console.log(last);
});

//End of second problem


function sumNums(x, y, cb) {
    return cb(x, y);
}

const add = function (x, y) {
    return x + y;
}

console.log(sumNums(2, 2, add));

//End of third problem

function multiplyNums(x, y, cb) {
    return cb(x, y);
}
const multiply = function (x, y) {
    return x * y;
}

console.log(multiplyNums(2, 8, multiply));

//End of forth problem


function contains(item, list, cb) {
    // contains checks if an item is present inside of the given array/list.
    if (items.includes('Pencil')) {
        return true;
    } else {
        return !true;
    }
    // Pass true to the callback if it is, otherwise pass false.
}
// I didn't need a callback function to complete this task.
console.log(contains());


//End of fifth problem


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
    // removeDuplicates removes all duplicate values from the given array.
    // Pass the duplicate free array to the callback function.
    // Do not mutate the original array.
}