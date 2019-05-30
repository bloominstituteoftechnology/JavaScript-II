// Create a higher order function and invoke the callback function to test your work.
// You have been provided an example of a problem and a solution to see how this works with
// our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

function higherFunction(arr, callback) {
  return callback(arr);
}

const getLowerCaseFirstLetter = function(arr) {
  words = arr.map(word => {
    return word.split("")[0].toLowerCase();
  });
  return words;
};

// Get Length
function getLength(arr, cb) {
  return cb(arr);
}

const length = function(arr) {
  return arr.length;
};

// Last Item
function last(arr, cb) {
  return cb(arr);
}

const lastItem = function(arr) {
  return arr.pop();
};

// Sum Nums
function higherOrderMath(x, y, cb) {
  return cb(x, y);
}

let sumNums = function(x, y) {
  return x + y;
};

// Multiply Nums
let multiplyNums = function(x, y) {
  return x * y;
};

// Contains
function higherFunction(listItem, arr, cb) {
  return cb(listItem, arr);
}

let contains = function(listItem, arr) {
  let inList = false;
  for (let i = 0; i < arr.length; i++) {
    if (listItem === arr[i]) {
      inList = true;
    } else if (listItem !== arr[i]) {
      continue;
    }
  }
  return inList;
};

/* STRETCH PROBLEM */

function higherFunction(array, cb) {
  return cb(array);
}

let removeDups = function(array) {
  console.log(
    array.filter(function(item, index) {
      return array.indexOf(item) >= index;
    })
  );
};
