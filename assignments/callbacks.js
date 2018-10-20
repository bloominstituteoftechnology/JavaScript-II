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

function logLength(length) {
  console.log(length);
}
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length)
}
getLength(items, logLength);

/////////////////////////////////////////

function logLast(lastItem) {
  console.log(lastItem)
}

function last(arr, cb) {
    // last passes the last item of the array into the callback.
    let lastI = arr.length -1;
    return cb(arr[lastI]);
}
last(items, logLast);

////////////////////////////////////////

function logSum(sum) {
  console.log(sum);
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let sum = x + y;
  return cb(sum);
}

sumNums(5, 5, logSum);

////////////////////////////////////////

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  product = x * y;
  return cb(product);
}

multiplyNums(7, 6, function() {
  console.log(product);
});

////////////////////////////////////////

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  list.forEach((x, i) => x === item ? cb(i, true) : cb(i, false));
}
contains("Gum", items, function(index, input) {
  if (input) {
    console.log(`Item has been found at index ${index}.`)
  } else {
    console.log(`Item not found at index ${index} :(`)
  }
})

/* STRETCH PROBLEM */

const logDeDuped = (array) => console.log(array);
function removeDuplicates(array, cb) {
  let mirrored = [...array];
  let deDupe = mirrored.filter((x, i, thisArr) => {
    return thisArr.indexOf(x) == i;
  })
  cb(deDupe);
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
removeDuplicates(["test", "test", "duplicateTest", "test"], logDeDuped);