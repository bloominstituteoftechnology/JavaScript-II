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

//number one
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
}

getLength(items, (arraylength) => {
  console.log(arraylength);
});


//number two
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[3]);
}

last(items, (lastitem) => {
  console.log(lastitem);
});


//number three
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let addition = x + y;
  cb(addition);
}

sumNums(2, 5, (addingtwonums) => {
  console.log(addingtwonums);
});

//number four
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let multiplies = x * y;
  cb(multiplies);
}

multiplyNums(2, 5, (multiplytwonums) => {
  console.log(multiplytwonums);
});


//number five
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  let verify = items.includes('Pencil');
  cb(verify);
}

contains('Pencil', items, (checking) => {
  console.log(checking);
});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
