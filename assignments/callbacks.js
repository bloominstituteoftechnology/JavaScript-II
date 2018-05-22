const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr[0]);
}

let findFirst = function(arrFirstItem) {
  return `The first item in this array is ${arrFirstItem}!`;
} 

firstItem(items, findFirst); //?

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

let arrayLength = function(arrLen) {
  return `This array's length is ${arrLen}!`;
}

getLength(items, arrayLength); //?

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}

let findLast = function(arrLastItem) {
  return `The last item in this array is ${arrLastItem}!`;
} 

last(items, findLast); //?

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y, x+y);    
}

let summed = function(x, y) {
  return `${x} plus ${y} equals ${x+y}.`;
}

sumNums(1,2,summed); //?

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y, x*y);
}

let produced = function(x, y) {
  return `${x} times ${y} equals ${x*y}.`;
}

multiplyNums(3,5,produced); //?

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for (let i = 0; i < list.length; i++) {
    x = item;
    trueOrFalse = null;
    if (list[i] === item) {
      trueOrFalse = true;
    }
    if (trueOrFalse === true) {
    return cb(trueOrFalse, x);
    }
  }
  trueOrFalse = false;
  return cb(trueOrFalse, x);
}

let itemExists = function(trueOrFalse, x) {
  if (trueOrFalse === true) {
    return `${x} is a part of this array.`;
  }
  return `${x} was not found.`;
}

contains(items[2], items, itemExists);




/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
