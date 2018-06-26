const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  cb(arr[0]);
}

//Refactoring
const firstItem2 = (arr, cb) => cb(arr[0]);

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
}

//Refactoring
const getLength2 = (arr, cb) => cb(arr.length);


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[arr.length - 1])
}

//Refactoring
const last2 = (arr, cb) => cb(arr[arr.length - 1]);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x + y);
}

//Refactoring
const sumNums2 = (x, y, cb) => cb(x + y);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x * Y);
}

//Refactoring
const multiplyNums2 = (x, y, cb) => cb(x * y);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.'
  if (list.includes(item)) {
    cb(true);
  } else {
    cb(false);
  }
}

//Refactoring
const contains2 = (item, list, cb) => {
  if (list.includes(item)) {
    cb(true);
  } else {
    cb(false);
  }
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  cb(newArr);
}

//Refactoring
const removeDuplicates2 = (array, cb) => {
  const newArr = [];
  array.forEach(num => {
    if (!newArr.includes(num)) {
      newArr.push(num);
    }
  })
  cb(newArr);
}
