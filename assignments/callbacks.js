const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

let first = function(arr) {
  return arr[0];
}

let length = function(arr){
  return arr.length;
}

let lastI = function (arr) {
  return arr.length-1
}

let sum = function (x,y) {
  return x+y;
}

let multiply = function (x,y) {
  return x*y;
}

let check = function (item, list) {
  for (let i = 0; i<=list.length; i++) {
    if (item === list[i]) {
      return 'true';
    }
    else if (i === list.length) {
      return 'false'
    }
  }
}

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr);
}
firstItem(items, first);


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr);
}
getLength(items,length);


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr);
}
last(items, lastI);


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x,y);
}
sumNums(2,5,sum);


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x,y);
}
multiplyNums(2,5,multiply);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(item, list)
}
contains('cat', ['dog', 'hat', 'cat'], check);
/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
