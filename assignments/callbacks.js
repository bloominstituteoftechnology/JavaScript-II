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
function cb(thing) {
  console.log(thing);
}

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

getLength(items, cb)

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}

last(items, cb);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x+y);
}

sumNums(4,5,cb);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

multiplyNums(2,5,cb);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(list.some(x => x === item));
}

contains("Gum", items, cb);

/* STRETCH PROBLEM */

const drinks = ['tea', 'boba', 'boba', 'water'];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const aset = new Set(array);
  return cb(Array.from(aset));
}

removeDuplicates(drinks, cb);

// Without using the Set, order preserved

function unique(arr, cb) {
  let seen = {}, result = [];
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let el = arr[i];
    if (!seen[el]) {
      seen[el] = true;
      result.push(el);
    }
  }
  return cb(result);
}

unique(drinks, cb)