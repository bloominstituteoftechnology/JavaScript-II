const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr);
}

firstItem(items, function(first) {console.log(items[0]);});

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr);
}

getLength(items, function(length) {console.log(items.length);});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr);
}

last(items, function(last) {console.log(items[items.length - 1]);});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y);
}

function add(x, y) {
  return x + y;
}

console.log(sumNums(2, 1, add));

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y);
}

function multiply(x, y) {
  return x * y;
}

console.log(multiplyNums(6, 3, multiply));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(item, list);
}

// To show that multiple ways of doing the same callback
//
// function doesContain(item, list) {
//   if (list.includes(item)) {
//     console.log("true");
//     return true;
//   }
//   else {
//     console.log("false");
//     return false;
//   }
// }
//
// contains("tent", ["stakes", "tent", "drinks", "food"], doesContain);

contains("tent", ["stakes", "tent", "drinks", "food"], function(item, list) {
  if (list.includes(item)) {
    console.log("true");
    return true;
  }
  else {
    console.log("false");
    return false;
  }
});

/* STRETCH PROBLEM */
let utensils = ["fork", "spoon", "knife", "fork", "spoon", "knife", "spachela"];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  console.log(cb(array));
}

function dupRemove(arr) {
  let nonDup = Array.from(new Set(arr));
  return nonDup;
}

removeDuplicates(utensils, dupRemove);

// Another way of doing the same thing.
removeDuplicates(utensils, function(element) {
  let nonDup = Array.from(new Set(element));
  return nonDup;
});