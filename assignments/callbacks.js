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
  return cb(arr.length);
  // getLength passes the length of the array into the callback.
}

getLength(items, function (numItems) {
  console.log(numItems);
});

function last(arr, cb) {
  return cb(arr.slice(-1)[0]);
  // last passes the last item of the array into the callback.
}

last(items, function (lastItem) {
  console.log(lastItem);
});

function sumNums(x, y, cb) {
  return cb(x + y);
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}
sumNums(5, 7, function (sum) {
  console.log(sum);
});

function multiplyNums(x, y, cb) {
  return cb(x * y);
  // multiplyNums multiplies two numbers and passes the result to the callback.
}

multiplyNums(3, 4, function (num) {
  console.log(num);
});

function contains(item, list, cb) {
  return cb(item, list);
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}
function match(item, list) {
  for (var i = 0; i < list.length; i++) {
    if (list[i] === item) {
      return true;
    }
  }
  return false;
}

console.log(contains('Gum', items, match));
console.log(contains('Hot Sauce', items, match));
console.log(contains('yo-yo', items, match));
console.log(contains('Apples', items, match));

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
