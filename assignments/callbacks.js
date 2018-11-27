// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

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

//============================== Challenge 1 =============================
// getLength passes the length of the array into the callback.
function getLength(arr, cb) {
  return cb(arr.length);
}

getLength(items, function(itemsLength) {
  console.log(itemsLength);
});

//============================== Challenge 2 =============================
// last passes the last item of the array into the callback.
function last(arr, cb) {
  return cb(items[items.length - 1]);
}

last(items, function(lastItem) {
  console.log(lastItem);
});

//============================== Challenge 3 =============================
// sumNums adds two numbers (x, y) and passes the result to the callback.
function sumNums(x, y, cb) {
  return cb(x + y);
}

sumNums(2, 5, function(sum) {
  console.log(sum);
});

//============================== Challenge 4 =============================
// multiplyNums multiplies two numbers and passes the result to the callback.
function multiplyNums(x, y, cb) {
  return cb(x * y);
}

multiplyNums(6, 5, function(multiply) {
  console.log(multiply);
});

//============================== Challenge 5 =============================
// contains checks if an item is present inside of the given array/list.
// Pass true to the callback if it is, otherwise pass false.
function contains(item, list, cb) {
  let hasItem = false;

  list.forEach(function(value) {
    if (item === value) {
      hasItem = true;
    }
  });
  return cb(hasItem);
}

contains("Pencil", items, function(checkItem) {
  console.log(checkItem);
});

/* STRETCH PROBLEM */

// removeDuplicates removes all duplicate values from the given array.
// Pass the duplicate free array to the callback function.
// Do not mutate the original array.

function removeDuplicates(array, cb) {}
