const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
// firstItem passes the first item of the given array to the callback function.
function firstItem(arr, cb) {  
  return cb(arr[0]);
};
function firstItemCB(index) {
  console.log(index);
};
firstItem(items, firstItemCB);

 // getLength passes the length of the array into the callback.

function getLength(arr, cb) {
  return cb(arr.length);
}

function getLengthCb(length) {
  console.log(length);
}
getLength(items, getLengthCb);

// last passes the last item of the array into the callback.

function last(arr, cb) {
  return cb(arr[arr.length-1]);
}
function lastCb(index) {
  console.log(index);
}
last(items, lastCb);

// sumNums adds two numbers (x, y) and passes the result to the callback.

function sumNums(x, y, cb) {
  return cb(x, y);
}
function sumNumsCb(num1, num2) {
  console.log(num1 + num2);
}
sumNums(3, 4, sumNumsCb);

// multiplyNums multiplies two numbers and passes the result to the callback.

function multiplyNums(x, y, cb) {
  return cb(x, y);
}
function multiplyNumsCB(num1, num2) {
  console.log(num1 * num2);
}
multiplyNums(3, 4, multiplyNumsCB);

// contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.

function contains(item, list, cb) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) {
      return cb(true);
    }
  }
  return cb(false);
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
